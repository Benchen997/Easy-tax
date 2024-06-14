function Header() {
  return (
      <header className='w-full bg-header-bg text-white
                flex justify-start p-4
                md:p-20' id='header'>
          <h1 className='text-center md:text-right text-xl md:text-5xl'>
              <a className='cursor-pointer' href="#header">Easy Tax</a>
          </h1>
      </header>);
}

export default Header;
