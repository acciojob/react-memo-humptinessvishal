import React, { useState } from "react";

const Memo = () => {
    const [text, setText] = useState("");
    const [memo, setMemo] = useState(["HTML","CSS"]);

    function submitMemo() {
        if (text.length > 5) {
            setMemo([...memo, text]);
            setText("");
        }
        else {
            setText("");
        }

    };

    return (
        <div>
            <h1>Memo</h1>
            <input onChange={e => setText(e.target.value)} value={text} placeholder="Add list" />
            <button onClick={submitMemo}>Submit</button>
            <ul>
                {
                    memo.map((ele) => (
                        <li>{ele}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Memo;