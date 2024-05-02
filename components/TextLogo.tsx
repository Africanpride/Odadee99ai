import Link from "next/link";
import React from "react";

const TextLogo = () => {
	return (
		<Link href={"/"} className=' text-xl dark:text-white'>
			<span className=''>Odadee</span>
			<span className='text-blue-400 dark:text-blue-950 font-bold'>99</span>
			<span className='text-blue-300  '>AI</span>
			<span>.NET</span>
		</Link>
	);
};

export default TextLogo;
