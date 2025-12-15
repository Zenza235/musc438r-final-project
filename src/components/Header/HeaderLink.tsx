import { Link } from "react-router-dom";

interface HeaderLinkProps {
  href: string,
  name: string,
}

function HeaderLink({href, name}: HeaderLinkProps) {
  return (
    <Link className="text-olive-600 hover:text-olive-400 text-2xl" to={href}>{name}</Link>
  );
}

export default HeaderLink;