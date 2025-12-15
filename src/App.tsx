import { Routes, Route } from 'react-router-dom';
import './styles/App.css'
import { Home, About, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* 404 Page Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
