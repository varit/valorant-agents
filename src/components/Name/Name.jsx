import "./Name.css";
import { NavLink } from "react-router-dom";
// import Image from "../Image/Image.jsx";
function Name(props) {
  const { agents } = props;
  // console.log("Agents",agents);

  return (
    <div className="primary-container">
    <div className="agents-name-container">
      <div className="agent-scrollbox">
        {agents.map((agent) => {
          return (
            <div className="agent" key={agent.id}>
              <ul className="agents-id">
                <li>{agent.fields.id}
                </li>
              </ul>
              <ul className="agents-name">
                <li>
                  <NavLink activeStyle={{color: "#ff4655"}} to={`/${agent.id}/agent/${agent.fields.name}`}>{agent.fields.name.toUpperCase()}</NavLink>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
    <div className="secondary-container"></div>
    </div>
  );
}

export default Name;
