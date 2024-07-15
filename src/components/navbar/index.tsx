"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of the hamburger
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-fit w-full fixed top-0 z-20 bg-white text-black border-b-2 border-stone-300">
      <div className="flex justify-between items-center p-4 font-serif">
        <div className="font-bold text-xl">Aetheris</div>

        <div className="lg:hidden">
          <button onClick={handleClick}>
            {isOpen ? "✕" : <FaBars size={20} />}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          <Link href="/">
            <div className="py-2 hover:scale-110 transition-transform">
              <p>Home</p>
            </div>
          </Link>
          <Link href="/aboutUs">
            <div className="py-2 hover:scale-110 transition-transform">
              About Us
            </div>
          </Link>
          <Link href="/services">
            <div className="py-2 hover:scale-110 transition-transform">
              Services
            </div>
          </Link>
          <Link href="/doctors">
            <div className="py-2 hover:scale-110 transition-transform">
              Doctors
            </div>
          </Link>
          <Link href="/Appointment">
            <div className="w-[140px] h-[40px] bg-blue-300 hover:bg-blue-400 hover:scale-110 rounded-full items-center justify-center flex transition-transform">
              Appointment
            </div>
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white fixed top-0 right-0 h-fit w-full border-b-2 border-stone-300 pb-10 shadow-xl transform font-serif ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-linear lg:hidden`}
      >
        <div className="flex justify-between p-4">
          <div className="font-bold text-xl">Aetheris</div>
          <button onClick={handleClick}>✕</button>
        </div>
        <div className="flex flex-col items-center px-5 gap-y-4">
          <Link href="/">
            <div
              className="py-2 hover:scale-110 transition-transform"
              onClick={handleClick}
            >
              <p>Home</p>
            </div>
          </Link>
          <Link href="/aboutUs">
            <div
              className="py-2 hover:scale-110 transition-transform"
              onClick={handleClick}
            >
              About Us
            </div>
          </Link>
          <Link href="/services">
            <div
              className="py-2 hover:scale-110 transition-transform"
              onClick={handleClick}
            >
              Services
            </div>
          </Link>
          <Link href="/doctors">
            <div
              className="py-2 hover:scale-110 transition-transform"
              onClick={handleClick}
            >
              Doctors
            </div>
          </Link>
          <Link href="/appointment">
            <div
              className="w-[140px] py-2 bg-blue-300 hover:bg-blue-400 rounded-full text-center hover:scale-110 transition-transform"
              onClick={handleClick}
            >
              Appointment
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
