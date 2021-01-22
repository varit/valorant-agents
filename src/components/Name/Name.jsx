import "./Name.css";
import { NavLink } from "react-router-dom";

function Name(props) {
  const { agents } = props;
  // console.log("Agents",agents);

  return (
    <div className="agents-container">
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
                  <NavLink activeStyle={{color: "#ff4655"}} to={`/agent/${agent.id}`}>{agent.fields.name.toUpperCase()}</NavLink>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Name;
