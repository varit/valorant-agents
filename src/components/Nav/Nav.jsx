import githubicon from "../../assets/icons/github-icon.svg";
import linkedinicon from "../../assets/icons/linkedin-icon.svg";
import createicon from "../../assets/icons/create-icon.svg";
import menuicon from "../../assets/icons/menu-icon.svg";
import exiticon from "../../assets/icons/exit-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/" className="item-va-nav">
          VALORANT AGENTS
        </Link>
        <Link to="/new" className="item-create-nav">
          <img src={createicon} alt="Create Agent Icon" />
        </Link>
        <a
					className="item-gh-nav"
					target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/varit"
        >
          <img src={githubicon} alt="GitHub Icon" />
        </a>
        <a
					className="item-li-nav"
					target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/varit-seekhao/"
        >
          <img src={linkedinicon} alt="LinkedIn Icon" />
        </a>
        <div className="hamburger-menu">
          <img
            src={menuicon}
            alt="menu"
            onClick={() => setMenuActive(!menuActive)}
          />
          <div className={`${menuActive ? "active-menu" : ""}`}></div>
        </div>
        <div className={`exit-icon ${menuActive ? "active-menu" : ""}`}>
          <img
            src={exiticon}
            alt="exit"
            onClick={() => setMenuActive(!menuActive)}
          />
          <div className="menu-container">
            <div className="menu-item-va">VALORANT AGENTS</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/varit"
              className="menu-item-gh"
            >
              GitHub
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/varit-seekhao/"
              className="menu-item-li"
            >
              LinkedIn
            </a>

            <Link to="/new" className="menu-item-create">
              <div>Create Agent</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
