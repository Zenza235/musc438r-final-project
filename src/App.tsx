import { Routes, Route } from 'react-router-dom';
import { Timeline, Credits, Page404, Album } from "./pages";
import { items } from "./items";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Timeline />} />
      <Route path="/credits" element={<Credits />} />
      {/* Album Routes */}
      {items
        .filter((i) => !!i.albumInfo)
        .map((i) => {
          return (<Route path={i.albumInfo.link.page} element={<Album item={i}/>}/>);
        })}
      {/* 404 Page Not Found */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
