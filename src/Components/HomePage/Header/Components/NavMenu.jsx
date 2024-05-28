import "./css/NavMenu.css";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

export default function NavMenu({ isMenuOpen, setIsMenuOpen }) {
    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <div className={`nav-menu ${isMenuOpen ? 'open' : 'closed'}`}>


            <button onClick={closeMenu}
                        aria-label="Close Menu"
                        className='close-button'>
                <CloseIcon fontSize="large"
                           className='text-white hover:text-blue-400
                           transition-colors duration-300' />
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

NavMenu.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired
};
