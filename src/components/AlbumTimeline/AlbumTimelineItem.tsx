import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { ALBUM_IMG_PATH } from "../../items";

interface AlbumTimelineItemProps {
  item: {
    id?: string,
    title: string,
    date: string,
    text?: string,
    albumInfo?: {
      label: string,
      link: {
        page: string,
      },
    }
  },
  index: number,
}

function AlbumTimelineItem({ item, index }: AlbumTimelineItemProps) {
  const timelineContentMargin = (index % 2 === 0) ? "mr-10 ml-5" : "mr-5 ml-10";
  const timelineContentClass = `border-olive-400 border-solid border-8 rounded-lg shadow-lg bg-tan-600 ${timelineContentMargin} mb-30 w-fit`;
  const flexDirection = (index % 2 === 0) ? "flex-row" : "flex-row-reverse"
  const flexClass = `flex ${flexDirection}`;

  const textMargin = (index % 2 === 0) ? "mr-5" : "ml-5";
  const textClass = `flex flex-col my-5 font-serif ${textMargin}`;

  const imgSrc = `${ALBUM_IMG_PATH}/${item.date}-front.jpg`;

  return (
    <TimelineItem id={item.id} className="scroll-m-60" >
      <TimelineOppositeContent>
        <div className="text-tan-600 font-mono mx-5">
          <h3 className="text-3xl" >{item.date}</h3>
        </div>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div className={timelineContentClass}>
          {(item.albumInfo) ? (
            <div className={flexClass}>
              <Link 
                className="w-70 m-5"
                to={item.albumInfo.link.page}
              >
                <img
                  className="max-w-full h-auto " 
                  src={imgSrc} alt={item.title} 
                />
              </Link>
              <div className={textClass}>
                <Link
                  className="text-2xl text-carbon hover:underline cursor-pointer"
                  to={item.albumInfo.link.page}
                >
                  <b><i>{parse(item.title)}</i></b>
                </Link>
                <h4 className="text-xl text-carbon pt-2" ><i>{item.albumInfo.label}</i></h4>
                <br />
                <p>{item.text}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col font-serif m-5">
              <h3 className="text-carbon text-2xl">{parse(item.title)}</h3>
              <p>{item.text}</p>
            </div>
          )}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

export default AlbumTimelineItem;