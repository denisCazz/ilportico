import Image from 'next/image';

export default function MenuCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
      {/* Card 1 - MENU VINI */}
      <a 
        href="/menu-vini" 
        className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-yellow-400/30 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(251,191,36,0.25)] hover:border-yellow-400 group"
      >
        <div className="w-full h-64 relative">
          <Image
            src="/images/wines.webp"
            alt="MENU VINI"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center">
            <span className="text-2xl font-bold uppercase tracking-wider text-purple px-4 py-4 drop-shadow-lg">
              MENU VINI
            </span>
          </div>
        </div>
      </a>

      {/* Card 2 - MENU DRINKS */}
      <a 
        href="/menu-drinks" 
        className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-yellow-400/30 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(251,191,36,0.25)] hover:border-yellow-400 group"
      >
        <div className="w-full h-64 relative">
          <Image
            src="/images/cocktail.webp"
            alt="MENU DRINKS"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center">
            <span className="text-2xl font-bold uppercase tracking-wider text-green px-4 py-4 drop-shadow-lg">
              MENU DRINKS
            </span>
          </div>
        </div>
      </a>

      {/* Card 3 - MENU FOOD */}
      <a 
        href="/menu-food" 
        className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-yellow-400/30 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(251,191,36,0.25)] hover:border-yellow-400 group"
      >
        <div className="w-full h-64 relative">
          <Image
            src="/images/food.webp"
            alt="MENU FOOD"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center">
            <span className="text-2xl font-bold uppercase tracking-wider text-purple px-4 py-4 drop-shadow-lg">
              MENU FOOD
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
