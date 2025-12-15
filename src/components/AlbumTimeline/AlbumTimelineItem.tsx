import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Link } from "react-router-dom";

interface AlbumTimelineItemProps {
  item: {
    title: string,
    date: string,
    desc: string,
    text: string,
    albumInfo?: {
      label: string,
      link: {
        page: string,
        img: string,
      },
    }
  },
  index: number,
}

function AlbumTimelineItem({ item, index }: AlbumTimelineItemProps) {
  const flexDirection = (index % 2 === 0) ? "flex-row" : "flex-row-reverse"
  const timelineContentClass = `border-olive-400 border-solid border-8 rounded-lg shadow-lg bg-tan-600 mx-5 mb-5`;
  const flexClass = `flex ${flexDirection}`;

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <div className="text-tan-600 font-mono mx-5">
          <h3 className="text-3xl" >{item.date}</h3>
          {/* <h4 className="text-2xl mt-2">{item.desc}</h4> */}
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
              <Link className="w-50 m-5" to={item.albumInfo.link.page}>
                <img
                  className="max-w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer" 
                  src={item.albumInfo.link.img} alt={item.title} 
                />
              </Link>
              <div className="flex flex-col my-5 font-serif">
                <h3 className="text-2xl text-carbon"><i>"{item.title}"</i></h3>
                <h4 className="text-xl text-carbon pt-2" >Label: <i>{item.albumInfo.label}</i></h4>
                <br />
                <p>{item.text}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col font-mono">
              <h3 className="text-carbon">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          )}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

export default AlbumTimelineItem;