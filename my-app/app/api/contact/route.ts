import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage (resets on server restart)
const submissions: Array<{
  id: string;
  timestamp: number;
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}> = [];

// Simple rate limiting (in-memory)
const rateLimits = new Map<string, number[]>();

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 1000);
}

// Generate unique ID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !company || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 5000 characters' },
        { status: 400 }
      );
    }

    // Rate limiting: 5 submissions per hour per IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const oneHourAgo = now - 3600000;

    if (!rateLimits.has(ip)) {
      rateLimits.set(ip, []);
    }

    const userSubmissions = rateLimits.get(ip)!;
    const recentSubmissions = userSubmissions.filter((time) => time > oneHourAgo);

    if (recentSubmissions.length >= 5) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again in an hour.' },
        { status: 429 }
      );
    }

    recentSubmissions.push(now);
    rateLimits.set(ip, recentSubmissions);

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      company: sanitizeInput(company),
      service: sanitizeInput(service),
      budget: sanitizeInput(budget || ''),
      message: sanitizeInput(message),
    };

    // Validate service value
    const validServices = [
      'supply-chain',
      'finance',
      'operations',
      'digital',
      'other',
    ];
    if (!validServices.includes(sanitizedData.service)) {
      return NextResponse.json(
        { error: 'Invalid service selection' },
        { status: 400 }
      );
    }

    // Create submission record
    const submission = {
      id: generateId(),
      timestamp: now,
      ...sanitizedData,
    };

    // Store in memory
    submissions.push(submission);

    // Keep only last 100 submissions (prevent memory bloat)
    if (submissions.length > 100) {
      submissions.shift();
    }

    // Log to console (for demo purposes)
    console.log('📧 New Contact Form Submission:');
    console.log('================================');
    console.log(`ID: ${submission.id}`);
    console.log(`Name: ${submission.name}`);
    console.log(`Email: ${submission.email}`);
    console.log(`Company: ${submission.company}`);
    console.log(`Service: ${submission.service}`);
    console.log(`Budget: ${submission.budget || 'Not specified'}`);
    console.log(`Message: ${submission.message}`);
    console.log(`Submitted: ${new Date(submission.timestamp).toLocaleString()}`);
    console.log('================================');

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will get back to you within 24 hours.',
        submissionId: submission.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve submissions (for demo/admin purposes)
export async function GET(request: NextRequest) {
  try {
    // Simple auth check - in production use proper authentication
    const authHeader = request.headers.get('authorization');
    const demoPassword = 'demo123'; // Change this in production

    if (authHeader !== `Bearer ${demoPassword}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Return recent submissions
    const recentSubmissions = submissions
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 20)
      .map((sub) => ({
        ...sub,
        submittedAt: new Date(sub.timestamp).toLocaleString(),
      }));

    return NextResponse.json(
      {
        total: submissions.length,
        recent: recentSubmissions,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error retrieving submissions:', error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}
