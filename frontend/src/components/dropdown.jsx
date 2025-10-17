import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-black/40 text-white font-semibold rounded-lg hover:bg-black/60 transition"
      >
        <Menu size={20} />
        Menu
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Items */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black/10">
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Menu size={16} /> Item 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Menu size={16} /> Item 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Menu size={16} /> Item 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
