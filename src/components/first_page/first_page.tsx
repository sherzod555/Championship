
import { useState } from "react";
import ChampionshipDropdown from "./ChampionshipDropdown";
import ClubNum from "./ClubNum";


const backgroundImages: { [key: string]: string } = {
  "UEFA Champions League": "url('/public/images/ucl.jpg')",
  "Premier League": "url('/public/images/apl.jpg')",
  "La Liga": "url('/public/images/laliga.jpg')",
  "Serie A": "url('/public/images/SerieA.jpg')",
  "FIFA World Cup": "url('/public/images/worldcup.jpg')",
  "Asian Cup": "url('/images/asian.jpg')"
};

export const FIRST = () => {
  const [selectedChampionship, setSelectedChampionship] = useState("UEFA Champions League");

  const bgImage = backgroundImages[selectedChampionship] || backgroundImages["UEFA Champions League"];

  return (
    <main
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: bgImage }}
    >
      <header className="bg-black/40 backdrop-blur-sm">
        <nav className="container flex items-center justify-between mx-auto px-4 h-20 text-white font-serif">
          <ul className="flex gap-x-5">
            <li className="hover:scale-105 duration-150">
              <ChampionshipDropdown
                selected={selectedChampionship}
                setSelected={setSelectedChampionship}
              />
            </li>
            <li className="hover:scale-105 duration-150">
              <ClubNum />
            </li>
            <li className="hover:scale-105 duration-150">
              <button className="flex items-center gap-x-5 w-auto h-12 px-4 py-2 bg-black/25 rounded-2xl border border-black">
                Randomiser
              </button>
            </li>
          </ul>

          <ul className="flex gap-x-10">
            <li className="hover:scale-105 duration-150">
              <button>SIGNIN</button>
            </li>
            <li className="hover:scale-105 duration-150">
              <button>SETTINGS</button>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default FIRST;

