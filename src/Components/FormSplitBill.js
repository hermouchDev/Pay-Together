import { useState } from "react";

function FormSplitBill({ friend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [myExpense, setMyExpense] = useState("");
    const [payingBill, setPayingBill] = useState("user");
    const paidByFriend = bill ? bill - myExpense : "";

    function handleSubmit(e) {
        e.preventDefault();

        if (!bill) return;
        setBill("");
        setMyExpense("");
        setPayingBill("");
        onSplitBill(payingBill === 'user' ? paidByFriend : paidByFriend - bill);
    }
    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {friend.name}</h2>
            <label>💸 Bill value :</label>
            <input
                type="text"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />
            <label>🧒 You expense :</label>
            <input
                type="text"
                value={myExpense}
                onChange={(e) =>
                    setMyExpense(
                        Number(e.target.value) > bill
                            ? myExpense
                            : Number(e.target.value)
                    )
                }
            />
            <label>👥 {friend.name}'s expense :</label>
            <input type="text" disabled value={paidByFriend} />
            <label>🤔 Who is paying the bill ?</label>
            <select
                value={payingBill}
                onChange={(e) => setPayingBill(e.target.value)}
            >
                <option value="user">You</option>
                <option value="friend">{friend.name}</option>
            </select>
            <button className="button" >Split bill</button>
        </form>
    );
}

export default FormSplitBill;
