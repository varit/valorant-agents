import { useState, useEffect } from "react";
import { baseURL, config } from "./services/index.js";
import { Route } from "react-router-dom";
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"
import Name from "./components/Name.jsx"


import './App.css';
import axios from "axios";

function App() {
  const  [agents, setAgents] = useState([]);
  agents.sort(function(a, b){
    return a.fields.id - b.fields.id
  })
  useEffect(() => {
    const getAgents = async () => {
      const res = await axios.get(baseURL, config);
      setAgents(res.data.records)
    }
    getAgents();
  },[])
  return (
    <div className="App">
      <Nav/>
      <Route>
        <Name agents={agents}/>
      </Route>
      <Footer/>

    </div>
  );
}

export default App;
