import Link from "next/link";

const routes = [
  { href: "/architecture", label: "Architecture" },
  { href: "/fashion", label: "Fashion" },
  { href: "/technology", label: "Technology" },
  { href: "/real-estate", label: "Real Estate" },
  { href: "/experimental", label: "Experimental" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#111] text-[#f2f2f2]">
      <h1 className="text-sm tracking-widest text-[#f2f2f2]/50">HERO SHOWCASE</h1>
      <nav className="flex flex-col items-center gap-4">
        {routes.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="text-2xl font-light tracking-tight hover:opacity-60"
          >
            {r.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
