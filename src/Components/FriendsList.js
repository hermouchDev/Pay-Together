export default function FriendsList({ friends, onSelection, selectedFriend }) {
    // const friends = initialFriends;

    return (
        <>
            <ul>
                {friends.map((friend) => (
                    <Friend
                        friend={friend}
                        selectedFriend={selectedFriend}
                        key={friend.id}
                        onSelection={onSelection}
                    />
                ))}
            </ul>
        </>
    );
}

function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            <p
                className={
                    friend.balance < 0
                        ? "green"
                        : friend.balance > 0
                        ? "red"
                        : "black"
                }
            >
                {friend.balance < 0
                    ? `You owe ${friend.name} ${Math.abs(friend.balance)} DH`
                    : friend.balance === 0
                    ? `You and ${friend.name} are even`
                    : `${friend.name} owes you ${friend.balance} DH`}
            </p>
            <button className="button" onClick={() => onSelection(friend)}>
                {
                    isSelected ? 'Close' : 'Select'
                }
            </button>
        </li>
    );
}
