import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export default function DropdownMenu({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="mb-2">
      <button
        type="button"
        className="flex items-center w-full py-2 px-6 font-semibold hover:bg-blue-800 rounded transition"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <span className="ml-auto">{open ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}</span>
      </button>
      {open && (
        <ul className="ml-4">{children}</ul>
      )}
    </li>
  );
}
