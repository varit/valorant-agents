import "./Image.css";
import { useParams } from "react-router-dom";
// import Description from "../Description/Description.jsx";

function Image(props) {
  const { agents } = props;
  const params = useParams();
  const currentAgent = agents.find(
    (agent) => agent.id === params.id
  );
  // console.log(currentAgent.fields)
  return (
    <>
      {currentAgent && (
        <div className="agent-image-container">
          <img
            className="agents-image"
            src={currentAgent.fields.image}
            alt={currentAgent.fields.name}
          />
          <div className="description-container">
            <div className="item-role">/ / ROLE</div>
            <div className="item-role-des">{currentAgent.fields.role}</div>
            <div className="item-bio">/ / BIOGRAPHY:</div>
            <div className="item-bio-des">{currentAgent.fields.biography}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Image;
