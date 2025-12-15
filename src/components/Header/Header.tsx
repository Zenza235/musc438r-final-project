import HeaderLink from "./HeaderLink";

function Header() {
  return (
    <header>
      <nav>
        <HeaderLink href="/" name="Home"/>
        <HeaderLink href="/about" name="About"/>
      </nav>
    </header>
  )
};

export default Header;