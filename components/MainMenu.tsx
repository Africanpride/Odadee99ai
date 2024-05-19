import Link from "next/link";

interface MainMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ isOpen, closeMenu }) => {
  return (
    <div>
      {isOpen && (
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary dark:bg-black text-white rounded-box w-52'
        >
          <li>
            <Link href='/' onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href='/about' onClick={closeMenu}>About Us</Link>
          </li>
          <li>
            <Link href='/get-involved' onClick={closeMenu}>Get Involved</Link>
          </li>
          <li>
            <Link href='/events' onClick={closeMenu}>Events</Link>
          </li>
          <li>
            <Link href='/news' onClick={closeMenu}>Announcements & News</Link>
          </li>
          <li>
            <Link href='/alumni-network' onClick={closeMenu}>Alumni Network</Link>
          </li>
          <li>
            <Link href='/resources' onClick={closeMenu}>Resources</Link>
          </li>
          <li>
            <Link href='/contact' onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MainMenu;
