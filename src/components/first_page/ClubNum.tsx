import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ClubNumDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Clubs #");

  const clubsnum = [
    "4",
    "8",
    "12",
    "16",
    "20",
    "24"
  ];

  const toggle = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="flex items-center gap-x-5 w-auto h-12 px-4 py-2 bg-black/25 rounded-2xl border border-black"
      >
        <span>{selected}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-auto bg-white/50 border border-gray-300 rounded-md shadow-lg">
          {clubsnum.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
