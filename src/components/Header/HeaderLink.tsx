import { Link } from "react-router-dom";

interface HeaderLinkProps {
  href: string,
  name: string,
}

function HeaderLink({href, name}: HeaderLinkProps) {
  return (
    <Link 
      className="text-tan-300 hover:text-ivory hover:text-4xl transition-all duration-300 cursor-pointer text-3xl py-2 pr-3" 
      to={href}>
      {name}
    </Link>
  );
}

export default HeaderLink;