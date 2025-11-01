import FriendsList from "./Components/FriendsList";
import FormAddFriend from "./Components/FormAddFriend";
import { useState } from "react";
import FormSplitBill from "./Components/FormSplitBill";
function App() {
    const initialFriends = [
        {
            id: 118836,
            name: "Clark",
            image: "https://i.pravatar.cc/48?u=118836",
            balance: -10,
        },
        {
            id: 933372,
            name: "Sarah",
            image: "https://i.pravatar.cc/48?u=933372",
            balance: 20,
        },
        {
            id: 499479,
            name: "Anthony",
            image: "https://i.pravatar.cc/48?u=499476",
            balance: 0,
        },
    ];

    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowAddFriend((show) => !show);
    }

    function handleNewFriend(friend) {
        setFriends((friends) => [...friends, friend]);
    }

    function handleSelectedFriend(friendSelected) {
        setSelectedFriend((selected) =>
            selected?.id === friendSelected.id ? null : friendSelected
        );
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        console.log(value);
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
        setSelectedFriend(null);
    }
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelection={handleSelectedFriend}
                />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleNewFriend} />
                )}
                <button className="button" onClick={handleShowAddFriend}>
                    {!showAddFriend ? "Add Friend" : "Close"}
                </button>
            </div>
            {selectedFriend && (
                <FormSplitBill
                    friend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}

export default App;
