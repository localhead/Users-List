import React from "react";

import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.data.length === 0) return <p>No users found</p>;

  const idDeleteUser = (userId) => {
    console.log(userId);

    const removeIndex = props.data.map((item) => item.id).indexOf(userId);

    console.log(removeIndex);

    const dataCopy = props.data;

    for (var i = 0; i < dataCopy.length; i++) {
      if (i === removeIndex && removeIndex !== -1) {
        dataCopy.splice(i, 1);
      }
    }

    console.log(dataCopy);
    props.userDeletedData(dataCopy);
  };

  return (
    <ul>
      {props.data.length > 0 &&
        props.data.map((prop) => (
          <UserItem
            key={prop.id}
            name={prop.name}
            age={prop.age}
            id={prop.id}
            deleteUser={idDeleteUser}
          ></UserItem>
        ))}
    </ul>
  );
};

export default UsersList;
