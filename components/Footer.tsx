export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold">Il Portico</h3>
          <p className="text-sm">
            © {new Date().getFullYear()} Il Portico. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="/privacy" className="transition hover:text-gray-400 hover:shadow-[0_0_8px_rgb(255,255,255)]">Privacy Policy</a>
          <a href="/terms" className="transition hover:text-gray-400 hover:shadow-[0_0_8px_rgb(255,255,255)]">Terms &amp; Conditions</a>
          <a href="/contact" className="transition hover:text-gray-400 hover:shadow-[0_0_8px_rgb(255,255,255)]">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
