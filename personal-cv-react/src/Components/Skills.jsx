import { useState } from "react";

function Skills() {
  const [showSkills, setShowSkills] = useState(true); 

  return (
    <section className="card">
      <h2>Skills</h2>

      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>

      {showSkills && (
        <ul>
          <li>
            Web Development
            <ul>
              <li>
                Frontend
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
              <li>
                Backend
                <ul>
                  <li>MySQL</li>
                  <li>Basic PHP</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Tools
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
            </ul>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Skills;