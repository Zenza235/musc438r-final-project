import { Routes, Route } from 'react-router-dom';
import { Timeline, Credits, Page404, AlbumTemplate } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Timeline />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/album-template" element={<AlbumTemplate />} />
      {/* 404 Page Not Found */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
