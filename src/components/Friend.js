import React from 'react';

function Friend({ friend, isSelected, setSelectedFriend, deleteFriend }) {
  return (
    <li className={`friend ${isSelected ? 'selected' : ''} ${friend.balance > 0 ? 'green' : friend.balance < 0 ? 'red' : ''}`}>
      <img src={friend.imageUrl} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>
        <p>
  {friend.balance === 0 ? (
    <span>You and {friend.name} are even</span>
  ) : friend.balance > 0 ? (
    <span className="green">{friend.name} owes you {friend.balance}₹</span>
  ) : (
    <span className="red">You owe {friend.name} {-friend.balance}₹</span>
  )}
</p>
      </div>
      <button onClick={() => setSelectedFriend(friend.name)}>{isSelected ? 'Close' : 'Select'}</button>
      <button className="delete-button" onClick={() => deleteFriend(friend.id)}>Delete</button>
    </li>
  );
}

export default Friend;
