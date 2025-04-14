import { useState } from "react";

interface Props {
  numberOfClubs: number;
}

export default function Brackets({ numberOfClubs }: Props) {
  const matches = Math.floor(numberOfClubs / 2);

  const [bracketData, setBracketData] = useState(
    Array(matches).fill({ teamA: "", teamB: "", scoreA: "", scoreB: "" })
  );

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...bracketData];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setBracketData(updated);
  };

  return (
    <div className="grid gap-6">
      {Array.from({ length: matches }).map((_, i) => (
        <div key={i} className="bg-white/10 border border-white/20 p-4 rounded-xl text-white font-mono">
          <h2 className="mb-2 font-semibold">Match {i + 1}</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Team A"
              maxLength={20}
              value={bracketData[i]?.teamA}
              onChange={(e) => handleChange(i, "teamA", e.target.value)}
              className="flex-1 px-4 py-2 rounded bg-black/30 border border-white/20 placeholder:text-white/40"
            />
            <input
              type="text"
              placeholder="Score A"
              maxLength={2}
              value={bracketData[i]?.scoreA}
              onChange={(e) => handleChange(i, "scoreA", e.target.value)}
              className="w-16 px-3 py-2 rounded bg-black/30 border border-white/20 text-center"
            />
            <span className="text-xl font-bold">vs</span>
            <input
              type="text"
              placeholder="Score B"
              maxLength={2}
              value={bracketData[i]?.scoreB}
              onChange={(e) => handleChange(i, "scoreB", e.target.value)}
              className="w-16 px-3 py-2 rounded bg-black/30 border border-white/20 text-center"
            />
            <input
              type="text"
              placeholder="Team B"
              maxLength={20}
              value={bracketData[i]?.teamB}
              onChange={(e) => handleChange(i, "teamB", e.target.value)}
              className="flex-1 px-4 py-2 rounded bg-black/30 border border-white/20 placeholder:text-white/40"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
