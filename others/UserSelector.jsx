import React from "react";

export default function UserSelector(props) {
  return (
    <p className="section">
      Users:
      {props.users &&
        props.users.map((user, index) => {
          return (
            <label key={user}>
              <input
                onChange={() => props.handeChange(index)}
                checked={index === props.selectedIndex}
                type="radio"
                name="user"
              />
              {user}
            </label>
          );
        })}
    </p>
  );
}
