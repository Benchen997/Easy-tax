import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import WidgetsIcon from '@mui/icons-material/Widgets';
import "./css/NavMenu.css";
import NavMenu from "./NavMenu.js";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='relative w-2/5'>
            <IconButton onClick={toggleMenu} aria-label="Open Menu">
                <WidgetsIcon fontSize="large"
                             className='text-white
                             hover:text-blue-400
                            transition-colors duration-300' />
            </IconButton>
            <NavMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </nav>
    );
}


