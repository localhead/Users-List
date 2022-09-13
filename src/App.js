import "./App.css";

import React, { useState } from "react";

import NewUser from "./components/NewUser";
import ModalWindow from "./components/ModalWindow";
import UsersList from "./components/UsersList";

const isHidden = {
  /* 1 - add hidden */
  value: 1,
};

const dataINIT = [
  {
    id: Math.random(),
    name: "Bill",
    age: 34,
  },
  {
    id: Math.random(),
    name: "Helen",
    age: 18,
  },
  {
    id: Math.random(),
    name: "Clark",
    age: 28,
  },
];

const dataINIT1 = [
  {
    id: Math.random(),
    name: "mark",
    age: 47,
  },
];

function App() {
  const [data, setData] = useState(dataINIT);

  const newUserAdded = (formData) => {
    setData((prevData) => {
      return [formData, ...prevData];
    });
  };

  const removeUser = (deletedData) => {
    console.log(deletedData);
    const theData = [...deletedData];

    setData(theData);
  };

  console.log(data);

  return (
    <div className="App">
      <NewUser newUserData={newUserAdded}></NewUser>
      <ModalWindow data={isHidden}></ModalWindow>
      <UsersList data={data} userDeletedData={removeUser}></UsersList>
    </div>
  );
}

export default App;
