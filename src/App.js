import { useState, useEffect } from "react";
import { baseURL, config } from "./services/index.js";
import { Route } from "react-router-dom";
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"
import Name from "./components/Name.jsx"
import Create from "./components/Create.jsx";


import './App.css';
import axios from "axios";

function App() {
  const  [agents, setAgents] = useState([]);

  
  useEffect(() => {
    const getAgents = async () => {
      const res = await axios.get(baseURL, config);
      setAgents(res.data.records.sort(function(a, b){
        return a.fields.id - b.fields.id
      }))
    }
    getAgents();
  },[])
  return (
    <div className="App">
      <Nav/>
      <Route>
        <Name agents={agents}/>
      </Route>
      <Create/>
      <Footer/>

    </div>
  );
}

export default App;
