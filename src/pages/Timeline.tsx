import { Header, AlbumTimeline } from "../components";

function Timeline() {
  return (
    <>
      <Header />
      <div className="bg-carbon">
        <div className="p-5">
          <p className="text-tan-600">(works best in fullscreen; click on album covers to see more info about them!)</p>
        </div>
        <AlbumTimeline />
      </div>
    </>
  );
};

export default Timeline;