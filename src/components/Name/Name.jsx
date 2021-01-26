import "./Name.css";
import { NavLink } from "react-router-dom";
import staticAgentBG from "../../assets/media/agent-background-generic.JPG";
import vidAgentBG from "../../assets/media/agent-background-generic.mp4";

function Name(props) {
  const { agents } = props;

  return (
    <div className="primary-container">
      <div>
        <video
          playsInline
          autoPlay
          muted
          loop
          poster={staticAgentBG}
          id="bgvid"
        >
          <source src={vidAgentBG} type="video/mp4" />
        </video>
      </div>
      <div className="agent-scrollbox">
        {agents.map((agent) => {
          return (
            <div className="agent" key={agent.id}>
              <ul className="agents-id">
                <li>{agent.fields.id}</li>
              </ul>
              <ul className="agents-name">
                <li>
                  <NavLink
                    activeStyle={{ color: "#ff4655" }}
                    to={`/${agent.id}/agent/${agent.fields.name}`}
                  >
                    {agent.fields.name.toUpperCase()}
                  </NavLink>
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
