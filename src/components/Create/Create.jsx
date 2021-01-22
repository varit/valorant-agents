import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";

function Create(props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [biography, setBiography] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    console.log("submitted")

    const fields = {
        name,
        role,
        biography,
    }

    await axios.post( baseURL, {fields}, config)
    props.setToggle((toggle) => !toggle)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>CREATE COMPONENT</h1>
      <h2>NAME</h2>
      <label htmlFor="name"></label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Role</h2>
      <label htmlFor="role"></label>
      <input
        name="role"
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <h2>BIOGRAPHY</h2>
      <label htmlFor="biography"></label>
      <input
        name="biography"
        type="text"
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
      />
      <div>
        <button type="submit">CREATE YOUR AGENT</button>
      </div>
    </form>
  );
}

export default Create;
