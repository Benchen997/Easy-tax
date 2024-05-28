import Nav from "./Components/Nav.jsx";


function Header() {
  return (
      <header className='bg-header-bg text-white flex flex-row items-center justify-between p-4 md:p-20'>
          <Nav/>
          <h1 className='w-3/5 text-center md:text-right text-xl md:text-5xl'>
              Easy Tax
          </h1>
      </header>
)
    ;
}

export default Header;
