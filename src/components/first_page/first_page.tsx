// import APL from "../../assets/apl.png"
// import LaLIGA from "../../assets/laliga.png"
// import WorldCup from "../../assets/worldcup.png"
// import UCL from "../../assets/ucl.png"
import { useState } from "react";
import ChampionshipDropdown from "./ChampionshipDropdown";
import ClubNum from "./ClubNum";


const backgroundImages: { [key: string]: string } = {
  "UEFA Champions League": "url('/src/assets/ucl.png')",
  "Premier League": "url('/src/assets/apl.png')",
  "La Liga": "url('/src/assets/laliga.png')",
  "Serie A": "url('/src/assets/SerieA.png')",
  "FIFA World Cup": "url('/src/assets/worldcup.png')",
  "Asian Cup": "url('/src/assets/asian.png')"
};

export const FIRST = () => {
  const [selectedChampionship, setSelectedChampionship] = useState("UEFA Champions League");

  const bgImage = backgroundImages[selectedChampionship] || backgroundImages["UEFA Champions League"];

  return (
    <main
      className="min-h-screen bg-cover bg-center"
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

