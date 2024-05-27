import { useState } from 'react';
import navIcon from './nav-icon.svg';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='w-2/5'>
            <div className='md:hidden' onClick={toggleMenu}>
                <img src={navIcon} alt='Nav Icon' className='w-10 h-10 cursor-pointer' />
            </div>

            <ul className={`flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 text-lg md:text-2xl ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                <li>Home</li>
                <li>About</li>
                <li>Calculator</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
