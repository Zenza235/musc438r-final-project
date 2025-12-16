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
        video?: string,
      }
      desc?: string,
    }
  }
}

function Album({ item }: AlbumProps) {
  const imgFrontSrc = `${ALBUM_IMG_PATH}/${item.date}-front.jpg`;
  const title = (item.altTitle) ? item.altTitle : item.title;

  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="flex flex-col">
          <img className="h-130 m-10 border-tan-600 border-solid border-4" src={imgFrontSrc} alt={title} />
        </div>
        <div className="flex flex-col text-tan-600 font-serif pt-10">
          <h2 className="text-3xl">
            <i>"{parse(title)}"</i>
          </h2>
          <h2 className="text-2xl mt-2.5">
            {item.date} | <i>{item.albumInfo.label}</i>
          </h2><br/>
        </div>
      </div>
      <p className="text-tan-600 p-5 text-lg">{item.albumInfo.desc}</p>
    </>
  );
}

export default Album;