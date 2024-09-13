import React, { useState } from 'react';
import FriendList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';
import SplitBill from './components/SplitBill';
import './App.css';

function App() {
  const [friends, setFriends] = useState([
    { id: 1, name: 'Clark', imageUrl: 'https://i.pravatar.cc/48?u=Clark', balance: -7},
    { id: 2, name: 'Sarah', imageUrl: 'https://i.pravatar.cc/48?u=Sarah', balance: 30},
    { id: 3, name: 'Anthony', imageUrl: 'https://i.pravatar.cc/48?u=Anthony', balance: 0},
  ]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const addFriend = (name, imageUrl) => {
    const newFriend = { id: friends.length + 1, name, imageUrl, balance: 0 };
    setFriends([...friends, newFriend]);
    setShowAddForm(false); // Close add form after adding a friend
  };

  const deleteFriend = (friendId) => {
    setFriends(friends.filter(friend => friend.id !== friendId));
    if (selectedFriend && friends.some(friend => friend.id === friendId && friend.name === selectedFriend)) {
      setSelectedFriend(null); // Deselect if the deleted friend was selected
    }
  };

  const updateFriendBalance = (friendName, amount) => {
    setFriends(friends.map(friend =>
      friend.name === friendName ? { ...friend, balance: friend.balance + amount } : friend
    ));
  };

  const handleFriendSelect = (friendName) => {
    setSelectedFriend(prevSelectedFriend => prevSelectedFriend === friendName ? null : friendName);
    setShowAddForm(false); // Close add form when selecting a friend
  };

  const handleAddFriendClick = () => {
    setShowAddForm(true);
    setSelectedFriend(null); // Deselect any selected friend when showing add form
  };

  return (
    <div className="App">
      <h1>Split Money</h1>
      <div className="container">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={handleFriendSelect}
          deleteFriend={deleteFriend}
        />
        {selectedFriend && (
          <SplitBill
            selectedFriend={selectedFriend}
            friends={friends}
            updateFriendBalance={updateFriendBalance}
          />
        )}
      </div>
      {showAddForm && <AddFriendForm addFriend={addFriend} />}
      {!showAddForm && (
        <button onClick={handleAddFriendClick}>Add a new friend</button>
      )}
    </div>
  );
}

export default App;
