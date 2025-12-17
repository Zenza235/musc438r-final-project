import { Routes, Route } from 'react-router-dom';
import { Timeline, About, Page404, Album } from "./pages";
import { items, BASE_URL } from "./items";

function App() {
  return (
    <Routes>
      <Route path={BASE_URL} element={<Timeline />} />
      <Route path={`${BASE_URL}/about`} element={<About />} />
      {/* Album Routes */}
      {items
        .filter((i) => !!i.albumInfo)
        .map((i) => {
          console.log(i.albumInfo.link.page);
          return (<Route path={i.albumInfo.link.page} element={<Album item={i}/>}/>);
        })}
      {/* 404 Page Not Found */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
