/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="justify-between flex w-full">
      <div>
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
          alt=""
        />
      </div>
      <div className="flex">
        <Link
          href={"/login"}
          className="px-4 py-2 rounded-3xl border mx-1 text-black bg-white"
        >
          Login
        </Link>
        <Link
          href={"/signup"}
          className="px-4 py-2 rounded-3xl bg-black text-white mx-1"
        >
          sign up
        </Link>
      </div>
    </div>
  );
}
