import Link from "next/link";

const MainMenu: React.FC = () => {
	return (
		<div >
			<ul
				tabIndex={0}
				className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary dark:bg-black text-white rounded-box w-52'
			>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About Us</Link>
				</li>
				<li>
					<Link href='/mission-vision'>Mission & Vision</Link>
				</li>
				<li>
					<Link href='/get-involved'>Get Involved</Link>
				</li>
				<li>
					<Link href='/events'>Events</Link>
				</li>
				<li>
					<Link href='/news'>Announcements & News</Link>
				</li>
				<li>
					<Link href='/alumni-network'>Alumni Network</Link>
				</li>
				<li>
					<Link href='/resources'>Resources</Link>
				</li>
				<li>
					<Link href='/contact'>Contact Us</Link>
				</li>
				<li>
					<Link href='/donate-now'>Donate Now</Link>
				</li>
			</ul>
		</div>
	);
};

export default MainMenu;
