import React, { useState } from "react";
import { nanoid } from "nanoid";
import Item from './Item'

function List() {
    const [items, setItems] = useState([])

    return (
        <div>
            <input
                type="button"
                value="Add Item"
                onClick={e => {
                    setItems(items => [nanoid(), ...items])
                }}
            />
            <hr />
            <div className="lists">
                {/* <ul>
                    <label className="title">{`key = { index }`}</label>
                    {items.map((id, index) => (
                        <Item name={id} />
                    ))}
                </ul>
                <ul>
                    <label className="title">{`key = { Math.random() }`}</label>
                    {items.map(id => (
                        <Item key={Math.random()} name={id} />
                    ))}
                </ul> */}
                <ul>
                    <label className="title">{`key = { uniqueValue }`}</label>
                    {items.map(id => (
                        <Item key={`${id}`} name={id} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default List;
