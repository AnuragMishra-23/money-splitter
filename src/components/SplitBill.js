import React, { useState, useEffect } from 'react';

function SplitBill({ selectedFriend, friends, updateFriendBalance }) {
  const [billValue, setBillValue] = useState('');
  const [yourExpense, setYourExpense] = useState('');
  const [friendExpense, setFriendExpense] = useState('');
  const [payer, setPayer] = useState('');

  useEffect(() => {
    const totalBill = parseFloat(billValue);
    const yourShare = parseFloat(yourExpense);

    if (!isNaN(totalBill) && !isNaN(yourShare)) {
      setFriendExpense((totalBill - yourShare).toFixed(2));
    } else {
      setFriendExpense('');
    }
  }, [billValue, yourExpense]);

  const handleSplitBill = () => {
    const totalBill = parseFloat(billValue);
    const yourShare = parseFloat(yourExpense);
    const friendShare = parseFloat(friendExpense);

    if (!isNaN(totalBill) && !isNaN(yourShare) && !isNaN(friendShare) && selectedFriend && payer) {
      let balanceAdjustment;

      if (payer === 'You') {
        balanceAdjustment = friendShare;
      } else if (payer === selectedFriend) {
        balanceAdjustment = -yourShare;
      }

      updateFriendBalance(selectedFriend, balanceAdjustment);

      // Reset the form
      setBillValue('');
      setYourExpense('');
      setFriendExpense('');
      setPayer('');
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="split-bill">
      <h2>SPLIT A BILL WITH {selectedFriend.toUpperCase()}</h2>
      <form>
        <label>
          Bill value
          <input
            type="number"
            value={billValue}
            onChange={(e) => setBillValue(e.target.value)}
            required
          />
        </label>
        <label>
          Your expense
          <input
            type="number"
            value={yourExpense}
            onChange={(e) => setYourExpense(e.target.value)}
            required
          />
        </label>
        <label>
          {selectedFriend}'s expense
          <input
            type="number"
            value={friendExpense}
            readOnly
          />
        </label>
        <label>
          Who is paying the bill?
          <select value={payer} onChange={(e) => setPayer(e.target.value)} required>
            <option value="">Select person</option>
            <option value="You">You</option>
            <option value={selectedFriend}>{selectedFriend}</option>
          </select>
        </label>
        <button type="button" onClick={handleSplitBill}>Split bill</button>
      </form>
    </div>
  );
}

export default SplitBill;
