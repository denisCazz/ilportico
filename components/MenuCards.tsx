import Image from 'next/image';

export default function MenuCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      
      {/* Card 1 - MENU VINI */}
      <a 
        href="/menu-vini" 
        className="overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
      >
        <div className="w-full h-64 relative bg-gray-800">
          <Image
            src="/images/wines.webp"
            alt="MENU VINI"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-xl font-bold uppercase tracking-wider text-white px-4 py-2">
              MENU VINI
            </span>
          </div>
        </div>
      </a>

      {/* Card 2 - MENU DRINKS */}
      <a 
        href="/menu-drinks" 
        className="overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
      >
        <div className="w-full h-64 relative bg-gray-800">
          <Image
            src="/images/cocktail.webp"
            alt="MENU DRINKS"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-xl font-bold uppercase tracking-wider text-white px-4 py-2">
              MENU DRINKS
            </span>
          </div>
        </div>
      </a>

      {/* Card 3 - MENU FOOD */}
      <a 
        href="/menu-food" 
        className="overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
      >
        <div className="w-full h-64 relative bg-gray-800">
          <Image
            src="/images/food.webp"
            alt="MENU FOOD"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-xl font-bold uppercase tracking-wider text-white px-4 py-2">
              MENU FOOD
            </span>
          </div>
        </div>
      </a>

    </div>
  );
}
