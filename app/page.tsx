"use client";
import Hero from "@/components/Hero";
import MenuCards from "@/components/MenuCards";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen w-full px-0 py-0 gap-0 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-0 w-full">
        <Hero />
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 mb-20">
          <MenuCards />
        </div>
      </main>
    </div>
  );
}
