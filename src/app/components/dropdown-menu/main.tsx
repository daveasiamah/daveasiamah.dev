import React from "react";
import Link from "next/link";
const moreLinks = ["Tech News", "Techpreneurship"];

const DropdownMenu = (props: any) => {
  return (
    <div className="relative group">
      <button className="group-hover:bg-gray-600 delay-300 text-white py-2 px-4">
        More...
      </button>
      <ul className="absolute hidden group-hover:block bg-gray-800 text-white py-2 mt-2 space-y-2">
        {moreLinks &&
          moreLinks.map((link) => (
            <li key={link}>
              <Link href="/link1" className="block px-4 py-2 hover:bg-gray-600">
                {link}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
