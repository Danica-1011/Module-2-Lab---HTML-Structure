import { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaSript",
    "React"
  ];

  const educationData = [
    {
      year: "2028",
      program: "College",
      school: "USTP-CDO"
    },
    {
      year: "2024",
      program: "Senior High School",
      school: "Kauswagan National High School"
    },
    {
      year: "2022",
      program: "Junior High School",
      school: "Bayabas National High School"
    },
    {
      year: "2018",
      program: "Elementary School",
      school: "Bongbongon Elementary School"
    },
    {
      year: "2012",
      program: "Kindergarten",
      school: "Bongbongon Elementary School"
    }
  ];

  document.body.style.backgroundColor = darkMode ? "#0a0a0a" : "#f4f4f4";
  document.body.style.padding = darkMode ? "0" : "20px";

  return (
    <div className={darkMode ? "dark-mode container" : "container"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <About />
        <Skills skills={skills} />
        <Education education={educationData}/>
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Danica Almonia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;