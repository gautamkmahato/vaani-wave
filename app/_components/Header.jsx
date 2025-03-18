"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons
import logo from "../../public/assets/logo-3.png";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

// Navigation Items
const navItems = [
  { label: "Home", href: "/dashboard" },
  { label: "Playground", href: "/playground" },
  { label: "Explore", href: "/explore" },
  { label: "Pricing", href: "/payment" },
  { label: "Documentation", href: "/docs" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="bg-[#090932]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Left: Hamburger Menu (Mobile) */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-300 hover:text-white md:hidden"
            >
              <Menu size={28} />
            </button>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center md:justify-start">
              <a href="/">
                <Image src={logo} width={144} height={144} alt="logo" />
              </a>
            </div>

            {/* Centered Navigation for Large Screens */}
            <nav className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-white text-sm font-medium"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Right: User Authentication */}
            <div className="flex items-center gap-4">
              <SignedOut>
                <div className="hidden sm:flex gap-3">
                  <SignInButton>
                    <button className="px-4 py-2 bg-[#423de3] cursor-pointer text-white text-[13px] rounded-md shadow-md hover:bg-[#332dbf] transition-all">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton>
                    <button className="px-4 py-2 border border-[#423de3] cursor-pointer text-white text-[13px] rounded-md shadow-md hover:bg-[#332dbf] transition-all">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar (Hamburger Menu) */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#18183d] text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-600">
          <Image src={logo} width={120} height={40} alt="logo" />
          <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Navigation Links for Mobile */}
        <nav className="mt-4">
          {navItems.map(({ label, href }) => (
            <a key={label} className="block px-4 py-2 text-gray-300 hover:text-white text-lg" href={href}>
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Sign In / Sign Up */}
        <div className="mt-6 px-4">
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SignInButton>
                <button className="w-full px-6 py-2.5 bg-[#423de3] text-white text-sm rounded-md shadow-md hover:bg-[#332dbf] transition-all">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton>
                <button className="w-full px-6 py-2.5 bg-gray-700 text-white text-sm rounded-md shadow-md hover:bg-gray-600 transition-all">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}
    </>
  );
}
