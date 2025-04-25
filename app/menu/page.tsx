import Link from "next/link";
import { FiDroplet, FiCoffee, FiBookOpen } from "react-icons/fi";
import { FaWineGlassAlt } from "react-icons/fa";

export default function MenuLanding() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-8 tracking-widest drop-shadow-lg text-center">
        Benvenuto! Scegli il tuo menu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
        <Link
          href="/menu-vini"
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-yellow-400/30 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(251,191,36,0.18)] hover:border-yellow-400 transition-all group"
        >
          <FaWineGlassAlt className="text-4xl text-purple mb-4 group-hover:text-yellow-400 transition" />
          <span className="text-2xl font-bold uppercase tracking-wider text-purple group-hover:text-yellow-400 transition">
            Menu Vini
          </span>
        </Link>
        <Link
          href="/menu-drinks"
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-yellow-400/30 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(251,191,36,0.18)] hover:border-yellow-400 transition-all group"
        >
          <FiCoffee className="text-4xl text-green mb-4 group-hover:text-yellow-400 transition" />
          <span className="text-2xl font-bold uppercase tracking-wider text-green group-hover:text-yellow-400 transition">
            Menu Drinks
          </span>
        </Link>
        <Link
          href="/menu-food"
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-yellow-400/30 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(251,191,36,0.18)] hover:border-yellow-400 transition-all group"
        >
          <FiBookOpen className="text-4xl text-purple mb-4 group-hover:text-yellow-400 transition" />
          <span className="text-2xl font-bold uppercase tracking-wider text-purple group-hover:text-yellow-400 transition">
            Menu Food
          </span>
        </Link>
      </div>
      <p className="mt-10 text-gray-400 text-center text-lg">
        Scansiona il QR code per tornare a questa pagina in qualsiasi momento.
      </p>
    </main>
  );
}
