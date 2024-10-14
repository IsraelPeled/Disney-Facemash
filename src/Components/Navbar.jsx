import "../css/Navbar.css";
import logo from "../assets/disneyIcon.png";
function Navbar() {
  return (
    <>
      <header className="header">
        <a href="/">
          <img src={logo} className="icon"></img>
        </a>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/">LeadScore</a>
          <a href="/">About</a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
