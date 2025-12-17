import { Link } from "react-router-dom";
import { Header } from "../components";
import { ALBUM_IMG_PATH } from "../items";
import parse from "html-react-parser";

interface AlbumProps {
  item: {
    title: string,
    altTitle?: string,
    date: string,
    albumInfo: {
      label: string,
      link: {
        page: string,
        info?: string,
      }
      desc?: string,
    }
  }
}

function Album({ item }: AlbumProps) {
  const imgFrontSrc = `${ALBUM_IMG_PATH}/${item.date}-front.jpg`;
  const title = (item.altTitle) ? item.altTitle : item.title;

  const desc = (item.albumInfo.desc) ? item.albumInfo.desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum nisl quis ullamcorper pulvinar. Praesent dolor ex, tempus scelerisque posuere at, placerat ac neque. Aliquam semper feugiat lorem, ac facilisis eros pellentesque at. Sed arcu justo, consequat id erat a, fringilla tempor libero. Nam quis mollis est. Donec vestibulum pretium velit. Duis et eros ac erat eleifend aliquam. Praesent ut arcu non tortor facilisis tristique vulputate quis tortor. Ut at ante justo. Donec feugiat sem in velit mollis, eu efficitur ipsum malesuada. Etiam eget placerat lacus, nec efficitur nibh. Etiam luctus, sapien at fermentum lobortis, neque tortor volutpat arcu, at consectetur augue orci vel orci. Aliquam efficitur, sapien vel ultricies dignissim, justo risus ultrices enim, id consectetur eros elit in nisl. Proin ac purus lacus."

  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="flex flex-col">
          <img className="h-130 w-auto m-10 border-tan-600 border-solid border-4" src={imgFrontSrc} alt={title} />
        </div>
        <div className="flex flex-col text-tan-600 font-serif pt-10">
          <Link target="_blank" to={(item.albumInfo.link.info) ? item.albumInfo.link.info : ""}>
            <h2 className="text-3xl hover:underline cursor-pointer">
            <i>"{parse(title)}"</i>
          </h2>
          </Link>
 
          <h2 className="text-2xl mt-2.5">
            {item.date} | <i>{item.albumInfo.label}</i>
          </h2><br/>
          <p className="text-xl text-wrap w-200 text-justify">
            {parse(desc)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Album;