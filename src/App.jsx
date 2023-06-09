import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainMenu from "./components/MainMenu";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Music from "./pages/Music";
import Projects from "./pages/Projects";

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
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
