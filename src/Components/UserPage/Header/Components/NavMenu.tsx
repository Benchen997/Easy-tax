import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface NavMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavMenu({ isMenuOpen, setIsMenuOpen }: NavMenuProps) {
  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className={`nav-menu ${isMenuOpen ? 'open' : 'closed'}`}>
      <button onClick={closeMenu} aria-label="Close Menu" className='close-button'>
        <CloseIcon fontSize="large" className='text-gray-500 hover:text-blue-400 transition-colors duration-300' />
      </button>
      <ul className='p-4 space-y-4'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Tax Calculator</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </div>
  );
}

export default NavMenu;

