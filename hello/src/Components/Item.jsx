import React, { useState } from "react";

export default function Item({ name }) {
    const [text, setText] = useState('')

    return (
        <li>
            <div className='wrapper'>
                <p>{name}</p>
                <input
                    value={text}
                    type="text"
                    placeholder="Add some text"
                    onChange={e => {
                        setText(e.target.value);
                    }}
                />
            </div>
        </li>
    );

}