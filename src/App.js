import { useState, useEffect } from "react";
import { baseURL2, baseURL, config } from "./services/index.js";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Name from "./components/Name/Name.jsx";
import Image from "./components/Image/Image.jsx";
import Create from "./components/Create/Create.jsx";
import InitialData from "./components/InitialData/InitialData.jsx";

import "./App.css";
import axios from "axios";

function App() {
  const [agents, setAgents] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [initialAgents, setInitialAgents] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      const res = await axios.get(baseURL, config);
      setAgents(
        res.data.records.sort(function (a, b) {
          return a.fields.id - b.fields.id;
        })
        );
      };
      getAgents();
    }, [toggle]);

  useEffect(() =>{
    const getInitialData = async () => {
      const res = await axios.get(baseURL2, config);
      setInitialAgents(res.data.records[0].fields);
    };
    getInitialData();
  }, [])
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <div className="name-container">
          <Name agents={agents} />
          <InitialData initialAgents={initialAgents}/>
        </div>
      </Route>
      <Route path="/:id/agent">
        <div className="name-container">
          <Name agents={agents} />
          <Image agents={agents} />
        </div>
      </Route>
      <Route path="/new">
        <Create setToggle={setToggle} agents={new Set(agents.map((agent) => {return agent.fields.name}))}/>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
