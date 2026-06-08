import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({children, onClick}){
  return <button className = "button" onClick ={onClick}>{children}</button>
}

export default function App(){
  const[showAddFriend, setShowAddFriend] = useState
  (false);

  function handleShowAddFriend(){
    setShowAddFriend(show => !show);
  }

  return <div className="app">
    <div className="sidebar">
      <FriendsList />
      {showAddFriend && <FormAddFriend />}
      <Button onClick = {handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      <FromSplitBill />
  </div>
}

function FriendsList(){
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend = {friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({friend}){
  return <li>
    <img src = {friend.img} alt={friend.name}/>
    <h3>{friend.name}</h3>

    {friend.balance < 0 && <p className="red"> 
      You owe {friend.name} £{Math.abs(friend.balance)}</p>}

    {friend.balance > 0 && <p className="green"> 
      {friend.name} owes you £{Math.abs(friend.balance)}</p>}

          {friend.balance === 0 && <p> 
      You and {friend.name} are even</p>}

      <Button>Select</Button>
  </li>
}


  function FormAddFriend(){
    return <form className="form-add-friend">
      <label>🧑Friend name</label>
      <input type = "text" />

      <label>📷Image URL</label>
      <input type = "text" />

      <Button>Add</Button>
    </form>
  }

  function FromSplitBill(){
    return <form className = "form-split-bill">
      <h2>Split a bill with friend</h2>

      <label>💰Bill Value</label>
      <input type = "text" />

      <label>💵Your Expenses</label>
      <input type = "text" />

      <label>💵There Expenses</label>
      <input type = "text" disabled/>

      <label>💰Who's paying the bill</label>
      <select>
        <option value = "user">You</option>
        <option value = "friend">Friend</option>
      </select>

      <Button>Split Bill</Button>


    </form>
  }