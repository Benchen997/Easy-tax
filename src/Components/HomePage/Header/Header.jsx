import Nav from "./Components/Nav.jsx";


function Header() {
  return (
      <header className='bg-header-bg flex flex-row items-center justify-between p-4 md:p-10'>
          <Nav/>
          <h1 className='w-3/5 text-center md:text-right
                        text-xl md:text-4xl'>
              Australian Individual Income<br className='md:hidden'/> Tax Calculator
          </h1>
      </header>
)
    ;
}

export default Header;
