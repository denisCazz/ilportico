import Link from "next/link";

const pages = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-gray-300 py-10 mt-10 rounded-t-2xl shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 border-t border-yellow-400/20 pt-8">
        <div className="mb-4 md:mb-0 text-center md:text-left flex flex-col gap-2">
          <h3 className="text-2xl font-extrabold text-yellow-400 drop-shadow">Il Portico</h3>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Il Portico. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Sito creato da{" "}
            <a
              href="https://bitora.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:underline transition"
            >
              bitora.it
            </a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="transition text-purple hover:text-yellow-400 hover:underline font-semibold text-base"
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
