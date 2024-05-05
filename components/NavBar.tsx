"use client";
import React from "react";
import TextLogo from "./TextLogo";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import MainMenu from "./MainMenu";

const NavBar = () => {
	// Define the type for the theme (Saving our eyes is necessary)
	type Theme = "lofi" | "business";

	// Initialize state with theme from local storage if available, otherwise we set lofi theme
	const [theme, setTheme] = useState<Theme>(
		typeof window !== 'undefined' && localStorage.getItem("theme") === "business" ? "business" : "lofi"
	  );
	  

	// Update state on toggle
	const handleToggle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		if (e.target.checked) {
			setTheme("business");
		} else {
			setTheme("lofi");
		}
	};

	// set theme state in localstorage on mount & also update localstorage on state change
	useEffect(() => {
		localStorage.setItem("theme", theme as string);
		const localTheme = localStorage.getItem("theme");
		// add custom data-theme attribute to html tag required to update theme using DaisyUI
		// document.querySelector("html").setAttribute("data-theme", localTheme);
		document.documentElement.setAttribute(
			"data-theme",
			localTheme as string
		);
	}, [theme]);

	return (
		<div className='navbar bg-primary z-10'>
			<div className='navbar-start '>
				<div className='dropdown z-50 '>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-circle '
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='white'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h7'
							/>
						</svg>
					</div>
					<MainMenu />
				</div>
				<div className='text-white'>Menu</div>
			</div>
			<div className='navbar-center'>
				<TextLogo />
			</div>
			<div className='navbar-end'>
				<div className=''>
					<label className='swap swap-rotate w-12 h-12 text-xl'>
						<input
							type='checkbox'
							onChange={handleToggle}
							// show toggle image based on localstorage theme
							checked={theme === "lofi" ? false : true}
						/>
						{/* lofi theme sun image */}
						{theme === "business" ? (
							<span className='text-gray-100 w-6 h-6'>
								<Moon size={24} />
							</span>
						) : (
							<span className='text-yellow-500 w-6 h-6'>
								<Sun size={24} />
							</span>
						)}
					</label>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
