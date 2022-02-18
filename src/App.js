import "./App.css";
import LandingPage from "./Components/landingPage";
import About from "./Components/about";
import Projects from "./Components/projects";
import Resume from "./Components/resume";
import Navbar from "./Components/Navbar";

import { Outlet } from "react-router-dom";
import WithoutNav from "./Components/WithoutNav";
import WithNav from "./Components/WithNav";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App({ location }) {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route exact path="/" element={<LandingPage />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
