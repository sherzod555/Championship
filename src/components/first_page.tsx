// first_page.tsx

import { useState } from "react";
import ChampionshipDropdown from "./ChampionshipDropdown";
import Brackets from "./brackets"; // This is the component we'll make for brackets
import ClubNumDropdown from "./ClubNum";

const backgroundImages: { [key: string]: string } = {
  "UEFA Champions League": "url('/images/ucl.jpg')",
  "Premier League": "url('/images/apl.jpg')",
  "La Liga": "url('/images/laliga.jpg')",
  "Serie A": "url('/images/SerieA.jpg')",
  "FIFA World Cup": "url('/images/worldcup.jpg')",
  "Asian Cup": "url('/images/asian.jpg')",
  "Euro Cup": "url('/images/euro.jpg')"
};

export const FIRST = () => {
  const [selectedChampionship, setSelectedChampionship] = useState("UEFA Champions League");
  const [numberOfClubs, setNumberOfClubs] = useState<number>(0);

  const bgImage = backgroundImages[selectedChampionship] || backgroundImages["UEFA Champions League"];

  return (
    <main
      className="h-screen bg-cover bg-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: bgImage }}
    >
      <header className="bg-black/40 backdrop-blur-sm">
        <nav className="container mx-auto px-20 flex items-center justify-between h-20 text-white font-serif">
          <ul className="flex gap-x-5">
            <li className="hover:scale-105 duration-150">
              <ChampionshipDropdown
                selected={selectedChampionship}
                setSelected={setSelectedChampionship}
              />
            </li>
            <li className="hover:scale-105 duration-150">
              <ClubNumDropdown
                numberOfClubs={numberOfClubs}
                setNumberOfClubs={setNumberOfClubs}
              />
            </li>
          </ul>

          <ul className="flex gap-x-10">
            <li className="hover:scale-105 duration-150">
              <button>SIGNIN</button>
            </li>
            <li className="hover:scale-105 duration-150">
              <button>Reset</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Bracket Section */}
      <section className="mt-10 px-10">
        <Brackets numberOfClubs={numberOfClubs} />
      </section>
    </main>
  );
};

export default FIRST;
