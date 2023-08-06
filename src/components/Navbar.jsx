function Navbar({toggleTheme}) {
  return (
    <nav>
      <h2 className="logo">
      Grocery <span>List</span>{" "}
      </h2>
      <button onClick={toggleTheme} className="btn">toggle theme</button>
    </nav>
  );
}

export default Navbar;
