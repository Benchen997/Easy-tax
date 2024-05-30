import Nav from "./Components/Nav.js";


function Header() {
  return (
      <header className='w-full bg-header-bg text-white
                flex flex-row items-center justify-between p-4
                md:p-20' id='header'>
          <Nav/>
          <h1 className='w-3/5 text-center md:text-right text-xl md:text-5xl'>
              <a className='cursor-pointer' href="#header">Easy Tax</a>
          </h1>
      </header>);
}

export default Header;
