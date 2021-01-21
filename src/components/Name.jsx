import { Link } from "react-router-dom";
import Description from "./Description.jsx";


function Name(props){
    const {agents} = props;
    // console.log("Agents",agents);

    return(
        <div>
            <h1>NAME COMPONENT</h1>
            <div>
                {agents.map((agent) =>{
                    return(
                        <div key={agent.id}>
                            <div className="agents-id">
                                {agent.fields.id}
                            </div>
                            <div>
                                <Link to={`/${agent.id}`}>{agent.fields.name}</Link>
                            </div>
                            <div>
                                <img className="agents-image" src={agent.fields.image} alt={agent.fields.name} />
                            </div>
                            <div>
                                <Description agent={agent}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Name;
