'use client'


import { useState } from "react";
import {
  Home,
  Users,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import logo from "../../../public/assets/logo-3.png";
import Image from "next/image";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden p-2 fixed top-4 left-4 bg-gray-800 text-gray-100 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Menu size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 w-64 h-full flex flex-col bg-[#17162d] shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="px-4 py-6 flex justify-between items-center">
          <span className="grid h-10 w-32 place-content-center">
            <Image src={logo} width="144" height="144" alt="logo" />
          </span>
          {isOpen && (
            <button
              className="lg:hidden text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          )}
        </div>

        <ul className="mt-6 space-y-1 px-4">
          <li>
            <a
              href="#"
              className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <Home className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
              General
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="group flex items-center gap-2 cursor-pointer justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800">
                <div className="flex items-center gap-2">
                  <Users className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
                  <span className="text-sm font-medium">Teams</span>
                </div>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Banned Users
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Calendar
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a
              href="#"
              className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <CreditCard className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
              Billing
            </a>
          </li>

          <li>
            <a
              href="#"
              className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <FileText className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
              Invoices
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="group flex items-center gap-2 cursor-pointer justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800">
                <div className="flex items-center gap-2">
                  <Settings className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
                  <span className="text-sm font-medium">Account</span>
                </div>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="group flex items-center gap-2 w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-800"
                    >
                      <LogOut className="size-5 text-gray-300 group-hover:text-gray-800 transition-colors" />
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
