import "./Nav.css";
import githubicon from "../../assets/icons/github-icon.svg";
import linkedinicon from "../../assets/icons/linkedin-icon.svg"
import createicon from "../../assets/icons/create-icon.svg";
import { Link } from "react-router-dom";

function Nav(){

    return(
        <div>
            <nav>
                <Link to="/" className="item-va-nav">VALORANT AGENTS</Link>
                <Link to="/new" className="item-create-nav">
                    <img src={createicon} alt="Create Agent Icon"/>
                </Link>
                <a className="item-gh-nav" rel="noopener noreferrer" href="https://github.com/varit">
                    <img src={githubicon} alt="GitHub Icon"/>
                </a>
                <a className="item-li-nav" rel="noopener noreferrer" href="https://www.linkedin.com/in/varit-seekhao/">
                    <img src={linkedinicon} alt="LinkedIn Icon"/>
                </a>
            </nav>
        </div>
    )
}

export default Nav;