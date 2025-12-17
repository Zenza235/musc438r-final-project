import { Header, AlbumTimeline } from "../components";

function Timeline() {
  return (
    <>
      <Header showTimelineControls={true}/>
      <div className="bg-carbon">
        <div className="p-5">
        </div>
        <AlbumTimeline />
      </div>
    </>
  );
};

export default Timeline;