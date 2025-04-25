import { FaWineGlassAlt } from "react-icons/fa";
import { GiWineBottle } from "react-icons/gi";

type Wine = {
  name: string;
  region: string;
  ingredients: string;
  glassType: "calice" | "tumbler";
  price?: string;
};

const wines: Wine[] = [
  {
    name: "Chianti Classico DOCG",
    region: "Toscana",
    ingredients: "Sangiovese 90%, Canaiolo 10%",
    glassType: "calice",
    price: "€8",
  },
  {
    name: "Prosecco Superiore DOCG",
    region: "Veneto",
    ingredients: "Glera 100%",
    glassType: "calice",
    price: "€7",
  },
  {
    name: "Barolo DOCG",
    region: "Piemonte",
    ingredients: "Nebbiolo 100%",
    glassType: "calice",
    price: "€12",
  },
  {
    name: "Lambrusco di Sorbara",
    region: "Emilia-Romagna",
    ingredients: "Lambrusco Salamino, Sorbara",
    glassType: "tumbler",
    price: "€6",
  },
];

export default function WineMenu() {
  return (
    <div className="flex flex-col gap-8">
      {wines.map((wine, index) => (
        <div
          key={index}
          className="bg-black/95 rounded-3xl px-6 py-10 flex flex-col items-center text-center shadow-lg"
        >
          <div className={`mb-4 rounded-full w-14 h-14 flex items-center justify-center shadow-lg
            ${wine.glassType === "calice" ? "bg-yellow-500/30 text-yellow-400" : "bg-purple-500/30 text-purple-300"}`}>
            {wine.glassType === "calice" ? (
              <FaWineGlassAlt className="text-3xl" />
            ) : (
              <GiWineBottle className="text-3xl" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-1">{wine.name}</h3>
          <p className="text-base text-yellow-100/80 mb-2">{wine.region}</p>
          <p className="text-lg text-white/90 italic mb-4">{wine.ingredients}</p>
          {wine.price && (
            <span className="px-6 py-2 bg-yellow-500/20 rounded-full text-yellow-400 font-semibold text-lg mb-2">
              {wine.price}
            </span>
          )}
          <div className="text-sm text-gray-400 mt-2">
            Bicchiere:{" "}
            <span className="font-semibold text-gray-200">
              {wine.glassType === "calice" ? "Calice" : "Tumbler basso"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}