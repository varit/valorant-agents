import "./Description.css";

function Description(props) {
  const { agent } = props;

  return (
    <div className="description-container">
      <div className="item-role">/ / ROLE</div>
      <div className="item-role-des">{agent.fields.role}</div>
      <div className="item-bio">/ / BIOGRAPHY:</div>
      <div className="item-bio-des">{agent.fields.biography}</div>
    </div>
  );
}

export default Description;
