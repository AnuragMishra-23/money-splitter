import React from 'react';
import Friend from './Friend';

function FriendList({ friends, selectedFriend, setSelectedFriend, deleteFriend }) {
  return (
    <div className="friends-list">
      <h2>Friends</h2>
      <ul>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            isSelected={selectedFriend === friend.name}
            setSelectedFriend={setSelectedFriend}
            deleteFriend={deleteFriend}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
