import React from "react";

function AddFriend({ name, setName, imageUrl, setImageUrl, handleAddFriend }) {
  return (
    <div>
      <label>
        Friend name
        <input
          type="text"
          placeholder="Friend name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Image URL
        <input
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <button onClick={handleAddFriend}>Add</button>
    </div>
  );
}

export default AddFriend;
