"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close
import logo from "../../public/assets/logo-3.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#090932]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <Image src={logo} width="144" height="144" alt="logo" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {["Home", "Playground", "Explore", "Pricing", "Documentation"].map((item) => (
                  <li key={item}>
                    <a className="text-gray-200 transition hover:text-gray-200/75" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Section: Login Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              {/* Login Button */}
              <a className="hidden sm:block rounded-md bg-[#423de3] px-5 py-2.5 text-sm font-medium text-white shadow-sm" href="#">
                Login
              </a>

              {/* Hamburger Icon (Mobile Menu Toggle) */}
              <button onClick={() => setIsOpen(true)} className="md:hidden text-gray-300 hover:text-white">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#18183d] text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-600">
          <Image src={logo} width={120} height={40} alt="logo" />
          <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
            <X size={28} />
          </button>
        </div>

        <nav className="mt-4">
          <ul className="space-y-4 px-4">
            {["Home", "Playground", "Explore", "Pricing", "Documentation"].map((item) => (
              <li key={item}>
                <a
                  className="block text-gray-300 hover:text-white py-2 text-lg transition"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Login Button */}
        <div className="mt-6 px-4">
          <a
            className="block w-full text-center rounded-md bg-[#423de3] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
            href="#"
          >
            Login
          </a>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
