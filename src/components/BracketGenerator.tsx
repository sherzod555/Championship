import { useEffect, useState } from "react";

const teamsList = [
  "Real Madrid",
  "Manchester United",
  "Liverpool",
  "Arsenal",
  "Barcelona",
  "Bayern Munich",
  "Juventus",
  "PSG",
];

interface MatchProps {
  matchIndex: number;
  teams: string[];
}

function Match({ matchIndex, teams }: MatchProps) {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");

  return (
    <div className="flex flex-col gap-2 bg-white/80 p-4 rounded-xl shadow-md w-full md:w-[300px]">
      <div className="flex justify-between items-center">
        <input
          list={`teams1-${matchIndex}`}
          value={team1}
          onChange={(e) => setTeam1(e.target.value)}
          placeholder="Team 1"
          className="px-2 py-1 border rounded w-[65%]"
        />
        <input
          type="number"
          value={score1}
          onChange={(e) => setScore1(e.target.value)}
          placeholder="Score"
          className="w-[30%] px-2 py-1 border rounded"
        />
        <datalist id={`teams1-${matchIndex}`}>
          {teams.map((team) => (
            <option key={team} value={team} />
          ))}
        </datalist>
      </div>

      <div className="flex justify-between items-center">
        <input
          list={`teams2-${matchIndex}`}
          value={team2}
          onChange={(e) => setTeam2(e.target.value)}
          placeholder="Team 2"
          className="px-2 py-1 border rounded w-[65%]"
        />
        <input
          type="number"
          value={score2}
          onChange={(e) => setScore2(e.target.value)}
          placeholder="Score"
          className="w-[30%] px-2 py-1 border rounded"
        />
        <datalist id={`teams2-${matchIndex}`}>
          {teams.map((team) => (
            <option key={team} value={team} />
          ))}
        </datalist>
      </div>
    </div>
  );
}

export default function BracketGenerator({ numberOfClubs }: { numberOfClubs: number }) {
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    setMatchCount(Math.floor(numberOfClubs / 2));
  }, [numberOfClubs]);

  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {Array.from({ length: matchCount }).map((_, idx) => (
        <Match key={idx} matchIndex={idx} teams={teamsList} />
      ))}
    </div>
  );
}
