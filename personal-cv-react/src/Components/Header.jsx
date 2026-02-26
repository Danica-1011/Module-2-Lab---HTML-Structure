function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <h1>Danica Almonia</h1>
      <p>IT Student | Web Developer</p>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;