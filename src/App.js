import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
// import Contact from "./components/Contact";
import Home from "./components/Home";
// import Navbar from './components/Navbar';
import Resume from "./components/Resume";
import Project from "./components/Project";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/about"
            element={<About theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/resume"
            element={<Resume theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/project"
            element={<Project theme={theme} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
