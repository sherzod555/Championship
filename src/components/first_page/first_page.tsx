// import APL from "../../assets/apl.png"
// import LaLIGA from "../../assets/laliga.png"
// import WorldCup from "../../assets/worldcup.png"
// import UCL from "../../assets/ucl.png"
import ChampionshipDropdown from "./ChampionshipDropdown";
import ClubNum from "./ClubNum";

export const FIRST = () => {
  return (
    <>
      <main>
        <header className="bg-red-600 w-full h-20">
          <nav className="container flex items-center justify-between mx-auto w-full h-full bg-blue-600 text-white font-serif">
            <ul className="flex gap-x-5">
              <li className="hover:scale-105 duration-150">
                <ChampionshipDropdown />
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
               
                <button>SINGIN</button>
              </li>
              <li className="hover:scale-105 duration-150">
               
                <button>SETTINGS</button>
              </li>
            </ul>
          </nav>
        </header>
      </main>
    </>
  );
};
export default FIRST;
