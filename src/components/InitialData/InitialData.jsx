import "./InitialData.css";

function InitialData(props){
  const { initialAgents } = props;
  // console.log(initialAgents);

  return(
    <div className="agent-image-container-id">
        <img className="agents-image-id" src={initialAgents.image} alt="agents image"/>
      <div className="description-container-id">
        <div className="intro-title">/ / CHOOSE YOUR AGENT</div>
        <div className="intro-des">{initialAgents.description}</div>
      </div>
    </div>
  )
}

export default InitialData;