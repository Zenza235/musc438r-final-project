import Timeline from "@mui/lab/Timeline";
import items from "./items";
import AlbumTimelineItem from "./AlbumTimelineItem";

function AlbumTimeline() {
  return (
    <Timeline position="alternate">
      {items.map((item, index) => (
        <AlbumTimelineItem key={index} item={item} index={index} />
      ))}
    </Timeline>
  );
}

export default AlbumTimeline;