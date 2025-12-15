import { Link } from "react-router-dom";

interface AlbumFrameProps {
  name: string,
  src: string,
}

function AlbumFrame({name, src}: AlbumFrameProps) {
  const route = `/${name}`;
  return (
    <Link to={route}>
      <img src={src} alt={name}/>
    </Link>
  );
}

export default AlbumFrame;