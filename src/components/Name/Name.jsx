import "./Name.css";
import { Link } from "react-router-dom";
import Description from "../Description/Description.jsx";

function Name(props) {
  const { agents } = props;
  // console.log("Agents",agents);

  return (
    <div>
      <div>
        {agents.map((agent) => {
          return (
            <div className="agents-container" key={agent.id}>
              <ul className="agents-id">
                <li>{agent.fields.id}
                </li>
              </ul>
              <ul className="agents-name">
                <li>
                  <Link to={`/${agent.id}`}>{agent.fields.name.toUpperCase()}</Link>
                </li>
              </ul>
              <div className="agents-image">
                <img
                  className="agents-image"
                  src={agent.fields.image}
                  alt={agent.fields.name}
                />
              </div>
              <div>
                <Description agent={agent} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Name;
