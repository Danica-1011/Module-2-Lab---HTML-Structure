function About() {
  return (
    <section className="card">
      <h2>About Me</h2>
      <p>
        I am Danica R. Almonia, an IT student who is still learning in this subject.
        I enjoy singing and dancing, and during my free time, I often scroll through
        social media watching videos. Through this course, I aim to improve my skills
        and gain a better understanding of web systems and technologies.
      </p>

      <img
        src="src/assets/profile.jpg"
        alt="Profile photo"
        style={{ height: "200px" }}
      />

      <p>
        Email:
        <a href="mailto:almonia.danica1@gmail.com">
          {" "}almonia.danica1@gmail.com
        </a>
        <br />
        GitHub:
        <a
          href="https://github.com/Danica-1011"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}github.com/Danica-1011
        </a>
      </p>
    </section>
  );
}

export default About;