import "./Description.css";

function Description(props) {
  const { agent } = props;

  return (
    <div className="description-container">
			{/* 16px */}
      <div className="item-role">/ / ROLE</div>
			{/* 60px bold */}
      <div className="item-role-des">{agent.fields.role}</div>
			{/* 16px */}
      <div className="item-bio">/ / BIOGRAPHY:</div>
			{/* 60px */}
      <div className="item-bio-des">{agent.fields.biography}</div>
    </div>
  );
}

export default Description;
