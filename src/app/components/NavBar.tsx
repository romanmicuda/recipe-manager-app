import Link from "next/link";
import React from "react";
import { FaHome, FaTachometerAlt, FaUser } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-gradient-start to-gradient-end p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Your Recipes
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="flex items-center text-white hover:text-yellow-300 transition-colors"
            >
              <span className="material-symbols-outlined">home</span>
              <p className="pl-1">Home</p>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="flex items-center text-white hover:text-yellow-300 transition-colors"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="pl-1">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/profile"
              className="flex items-center text-white hover:text-yellow-300 transition-colors"
            >
              <span className="material-symbols-outlined">person</span>
              <p className="pl-1">Profile</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
