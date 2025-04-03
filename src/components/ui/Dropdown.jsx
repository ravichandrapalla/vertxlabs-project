import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const Dropdown = ({ options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-gray-800 px-3 py-1 rounded-md flex items-center space-x-1"
        onClick={() => setOpen(!open)}
      >
        <span>{selected}</span>
        <FiChevronDown />
      </button>
      {open && (
        <div className="absolute left-0 mt-1 w-40 bg-gray-900 rounded shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
