import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";
import "./Create.css";

function Create(props) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [biography, setBiography] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    const fields = {
      image,
      name,
      role,
      biography,
    };

    await axios.post(baseURL, { fields }, config);
    props.setToggle((toggle) => !toggle);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="primary-container create-container"
    >
      <h1 className="item-title-create">CREATE YOUR AGENT</h1>
      <div className="item-image-create">IMAGE</div>
      <label htmlFor="image"></label>
      <input
        name="image"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="item-secondary item-image-input"
        placeholder="Image URL"
      />
      <div className="item-name-create">NAME</div>
      <label htmlFor="name"></label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="item-secondary item-name-input"
      />
      <div className="item-role-create">Role</div>
      <label htmlFor="role"></label>
      <input
        name="role"
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="item-secondary item-role-input"
      />
      <div className="item-bio-create">BIOGRAPHY</div>
      <label htmlFor="biography"></label>
      <textarea
        name="biography"
        type="text"
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
        className="item-secondary item-bio-textarea"
      />
      <div className="item-secondary item-create-button">
        <button type="submit">CREATE YOUR AGENT</button>
      </div>
    </form>
  );
}

export default Create;
