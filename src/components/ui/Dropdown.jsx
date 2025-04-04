import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Determine if this is an "Add" dropdown
  const isAddDropdown = selected === "+ Add";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center justify-between px-3 py-1 text-white rounded-md ${
          isAddDropdown ? "bg-blue-600" : "bg-gray-800"
        } hover:bg-opacity-80 transition-colors`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <FiChevronDown
          className={`ml-2 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-40 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              className={`block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 ${
                option === selected ? "bg-gray-700" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
