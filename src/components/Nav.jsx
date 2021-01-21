import githubicon from "../assets/icons/github-icon.svg";
import linkedinicon from "../assets/icons/linkedin-icon.svg"

function Nav(){

    return(
        <div>
            <nav>
                <div>VALORANT AGENTS</div>
                <a rel="noopener noreferrer" href="https://github.com/varit">
                    <img src={githubicon} alt="alt text"/>
                </a>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/varit-seekhao/">
                    <img src={linkedinicon} alt="alt text"/>
                </a>
            </nav>
        </div>
    )
}

export default Nav;