import HeaderLink from "./HeaderLink";

function Header() {
  return (
    <div className="flex flex-col px-2 pt-2 bg-forest-400 justify-center w-screen sticky top-0 z-50">
      <header className="m-5">
        <h1 className="text-tan-600">The Evolution of <i>Kalyi Jag</i></h1>
        <h2 className="text-tan-600 text-2xl">Paolo Atienza - MUSC438R Final Project</h2>&nbsp;
        <nav>
          <HeaderLink href="/" name="Timeline"/>
          <div className="text-tan-300 text-3xl py-2 pr-3 inline">•</div>
          <HeaderLink href="/credits" name="Credits"/>
        </nav>
      </header>
      <hr className="text-tan-600 w-full"></hr>
    </div>
  )
};

export default Header;