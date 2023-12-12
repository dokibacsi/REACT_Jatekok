import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TikTakToeApp from "./pages/TikTakToeApp.js";
import LightOnApp from "./pages/LightOnApp.js";
import Jatekok from "./pages/Jatekok.js";
import Layout from "./Layout.js";
import NoPage from "./pages/NoPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jatekok />} />
          <Route path="tiktaktoe" element={<TikTakToeApp />} />
          <Route path="lighton" element={<LightOnApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
