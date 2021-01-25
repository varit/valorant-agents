import { useState, useEffect } from "react";
import { baseURL, config } from "./services/index.js";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Name from "./components/Name/Name.jsx";
import Image from "./components/Image/Image.jsx";
import Create from "./components/Create/Create.jsx";

import "./App.css";
import axios from "axios";

function App() {
  const [agents, setAgents] = useState([]);
  const [toggle, setToggle] = useState(false);

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
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <div className="name-container">
          <Name agents={agents} />
        </div>
      </Route>
      <Route path="/:id/agent">
        <div className="name-container">
          <Name agents={agents} />
          <Image agents={agents} />
        </div>
      </Route>
      <Route path="/new">
        <Create setToggle={setToggle} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
