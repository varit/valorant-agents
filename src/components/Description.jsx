function Description(props){
    const {agent} = props;

    return(
        <div>
            <h1>DESCRIPTION COMPONENT</h1>
            <h2>Role:</h2>
            <div>{agent.fields.role}</div>
            <h2>Biography:</h2>
            <p>{agent.fields.biography}</p>
        </div>
    )
}

export default Description;