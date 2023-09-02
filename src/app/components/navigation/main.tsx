"use client";

import React from "react";
import Link from "next/link";
import { Dropdown } from "flowbite-react";

const links = ["Home", "Blog", "About", "Technologies", "Tools", "Resources"];

function NavBar() {
  return (
    <nav className="bg-gray-800 align-middle p-3 justify-center flex">
      <Link href="/" className="mr-12 mt-1 text-xl">
        <h2>
          <span className="border-b-4 border-indigo-500 font-bold">
            davidasiamah.
          </span>
          <span>dev</span>
        </h2>
      </Link>
      <div className="font-normal">
        <div className="flex items-center justify-center">
          <div className="flex space-x-4">
            {links.map((link) => (
              <Link href="/" key={link}>
                <p className="text-white text-l p-2 rounded-md hover:bg-slate-950 transition-colors">
                  {link}
                </p>
              </Link>
            ))}
          </div>
          <span className="ml-2">
            <Dropdown label="More">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
