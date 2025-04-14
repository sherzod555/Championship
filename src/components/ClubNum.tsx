// ClubNum.tsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  numberOfClubs: string;
  setNumberOfClubs: (value: string) => void;
}

export default function ClubNumDropdown({ numberOfClubs, setNumberOfClubs }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const clubsnum = ["4", "8", "12", "16", "20", "24", "Random"];

  const toggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    if (option === "Random") {
      const filtered = clubsnum.filter((num) => num !== "Random");
      const random = filtered[Math.floor(Math.random() * filtered.length)];
      setNumberOfClubs(random);
    } else {
      setNumberOfClubs(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="flex items-center gap-x-3 w-auto h-12 px-4 py-2 bg-black/30 text-white rounded-2xl border border-black"
      >
        <span>{numberOfClubs || "Clubs #"}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 bg-black/50 text-gray-400 border border-gray-300 rounded-md shadow-lg">
          {clubsnum.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
