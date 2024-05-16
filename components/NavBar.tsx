"use client";
import TextLogo from "./TextLogo";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import MainMenu from "./MainMenu";
import DonateButton2 from "../utils/DonateButton2";
import DonateOptions from "@/utils/DonateOptions";

const NavBar = () => {
  type Theme = "lofi" | "black";

  const [theme, setTheme] = useState<Theme>(
    typeof window !== "undefined" && localStorage.getItem("theme") === "black"
      ? "black"
      : "lofi"
  );

  const handleToggle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTheme(e.target.checked ? "black" : "lofi");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar bg-primary dark:bg-secondary z-10">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <MainMenu isOpen={isOpen} closeMenu={closeMenu} />
        </div>
        <div className="text-white">Menu</div>
      </div>
      <div className="navbar-center">
        <TextLogo />
      </div>
      <div className="navbar-end">
        <div className="flex justify-end items-center gap-x-2">
          <div>
            <DonateButton2 smallSize={true}>
              <DonateOptions />
            </DonateButton2>
          </div>
          <div className="hidden md:inline-block">
            <label className="swap swap-rotate w-12 h-12 text-xl">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "black"}
              />
              {theme === "black" ? (
                <span className="text-gray-100 w-6 h-6">
                  <Moon size={24} />
                </span>
              ) : (
                <span className="text-yellow-500 w-6 h-6">
                  <Sun size={24} />
                </span>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
