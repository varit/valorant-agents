import { useState } from "react";

function Create() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [biography, setBiography] = useState("");

    return (
        <form>
        <h1>CREATE COMPONENT</h1>
        <h2>NAME</h2>
        <label htmlFor="name"></label>
        <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        ></input>
        <h2>Role</h2>
        <label htmlFor="role"></label>
        <input
            name="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
        ></input>
        <h2>BIOGRAPHY</h2>
        <label htmlFor="biography"></label>
        <input
            name="biography"
            type="text"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
        ></input>
        </form>
    );
}

export default Create;
