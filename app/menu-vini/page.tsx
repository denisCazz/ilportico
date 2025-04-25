import WineMenu from "@/components/WineMenu";

export default function MenuVini() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 to-stone-900 py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-yellow-500/50 mr-4"></div>
            <span className="text-yellow-500/80 text-sm uppercase tracking-widest">
              La nostra selezione
            </span>
            <div className="w-16 h-px bg-yellow-500/50 ml-4"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-4">
            Menu dei Vini
          </h1>
          
          <p className="text-stone-400 max-w-xl mx-auto">
            Scopri le eccellenze enologiche italiane selezionate per voi dai nostri sommelier
          </p>
        </div>
        
        {/* Wine Menu */}
        <div className="bg-stone-900/70 backdrop-blur-sm rounded-2xl border border-stone-700/50 p-6 sm:p-8 shadow-lg">
          <WineMenu />
        </div>
        
        {/* Footer */}
        <div className="mt-10 text-center text-stone-500 text-sm">
          <p>Servito alla temperatura perfetta • Disponibile anche al bicchiere</p>
        </div>
      </div>
    </div>
  );
}