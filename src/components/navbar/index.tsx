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
    <div className="h-fit w-full text-black border-b-2 border-stone-300 relative">
      <div className="flex justify-between items-center p-4 font-serif">
        <div className="font-bold">
          Stabi4U
        </div>

        <div className="lg:hidden">
          <button onClick={handleClick}>
            {isOpen ? "✕" : <FaBars size={20} />}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          <Link href="/">
            <div>
              <p>Home</p>
            </div>
          </Link>
          <Link href="/aboutUs">
            <div>About Us</div>
          </Link>
          <Link href="/services">
            <div>Services</div>
          </Link>
          <Link href="/doctors">
            <div>Doctors</div>
          </Link>
          <Link href="/Appointment">
            <div className="h-[30px] w-[140px] bg-blue-300 rounded-2xl flex items-center justify-center">
              Appointment
            </div>
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white fixed top-0 right-0 h-full w-3/4 border border-l-2 border-stone-300 shadow-lg transform font-serif ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleClick}>✕</button>
        </div>
        <div className="flex flex-col items-end px-5 gap-y-4">
          <Link href="/">
            <div className="py-2" onClick={handleClick}>
              <p>Home</p>
            </div>
          </Link>
          <Link href="/aboutUs">
            <div className="py-2" onClick={handleClick}>
              About Us
            </div>
          </Link>
          <Link href="/services">
            <div className="py-2" onClick={handleClick}>
              Services
            </div>
          </Link>
          <Link href="/doctors">
            <div className="py-2" onClick={handleClick}>
              Doctors
            </div>
          </Link>
          <Link href="/appointment">
            <div className="py-2" onClick={handleClick}>
              Appointment
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
