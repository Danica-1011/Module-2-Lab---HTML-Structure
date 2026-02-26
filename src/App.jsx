import { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  document.body.style.backgroundColor = darkMode ? "#0a0a0a" : "#f4f4f4";
  document.body.style.padding = darkMode ? "0" : "20px";

  return (
    <div className={darkMode ? "dark-mode container" : "container"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Danica Almonia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;