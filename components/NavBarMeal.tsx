import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full text-sm p-4 flex-wrap">
      <Link href={"/"}>
        <img
          className=" md:h-10 h-10 w-fit p-2 cursor-pointer"
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
          alt="Logo"
        />
      </Link>

      <div className="p-1 bg-gray-200 rounded-3xl hidden md:flex">
        <button className="p-2 px-3 bg-white rounded-3xl mr-2">Delivery</button>
        <button className="p-2 px-3">Pickup</button>
      </div>

      <div className="flex-1 p-3 bg-gray-200 rounded-3xl hidden md:flex items-center mx-4 my-2 min-w-0">
        <p className="truncate px-4">{"Chicago O'Hare Intl Airport . Now"}</p>
      </div>

      <div className="flex-1 p-3 bg-gray-200 rounded-3xl hidden md:flex items-center mx-4 my-2 min-w-0">
        <input
          className="w-full bg-gray-200 outline-none"
          type="text"
          placeholder="Food, groceries, drinks, etc."
        />
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className="text-black md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-end items-center mt-2 w-full md:w-auto`}
      >
        <div className="px-4 py-2 rounded-3xl bg-black text-white mx-1 my-1">
          cart 0
        </div>

        <Link href={"/login"}>
          <span className="px-4 py-2 rounded-3xl border mx-1 text-black bg-white my-1 block text-center">
            Login
          </span>
        </Link>
        <Link href={"/signup"}>
          <span className="px-4 py-2 rounded-3xl bg-black text-white mx-1 my-1 block text-center">
            Sign Up
          </span>
        </Link>
      </div>
    </nav>
  );
}
