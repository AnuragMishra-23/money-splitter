import React, { useState } from "react";

function AddFriendForm({ addFriend }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !imageUrl) {
      alert("Please fill in both the name and image URL.");
      return;
    }
    addFriend(name, imageUrl);
    setName("");
    setImageUrl("");
  };

  return (
    <div className="add-friend-form">
      <h2>Add a new friend</h2> 
      <form onSubmit={handleSubmit}>
        <label>
          Friend name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddFriendForm;
