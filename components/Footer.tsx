import Link from "next/link";
import React from "react";

const Footer = () => {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className='footer footer-center p-4 bg-base-300 text-base-content'>
			<aside>
				<p>
					Copyright &copy; {currentYear} &mdash; All right reserved. {" "}&#10072; <Link href={'/'} >www.Odadee99ai.net</Link>
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
