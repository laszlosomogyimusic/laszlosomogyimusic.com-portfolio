import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainMenu from "./components/MainMenu";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Music from "./pages/Music";
import Projects from "./pages/Projects";
import ClickStudio from "./pages/projects/ClickStudio";
import ReleaseTheKitten from "./pages/projects/ReleaseTheKitten";
import LowFatBass from "./pages/projects/LowFatBass";

const App = () => {
  return (
    <BrowserRouter>
    <div>
        <MainMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/music" element={<Music />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ClickStudio" element={<ClickStudio />} />
          <Route path="/projects/ReleaseTheKitten" element={<ReleaseTheKitten />} />
          <Route path="/projects/LowFatBass" element={<LowFatBass />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
