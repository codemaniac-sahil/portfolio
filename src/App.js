import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
// import Contact from "./components/Contact";
import Home from "./components/Home";
// import Navbar from './components/Navbar';
import Resume from "./components/Resume";
import Project from "./components/Project";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  useEffect(() => {
    // Get theme from localStorage on initial render
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  useEffect(() => {
    // Update localStorage whenever theme changes
    localStorage.setItem('theme', theme);

    // Update the body class to reflect the theme
    document.body.className = theme;

  }, [theme]);

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
