import "./App.css";

import React, { useState } from "react";

import NewUser from "./components/NewUser";
import ModalWindow from "./components/ModalWindow";
import UsersList from "./components/UsersList";

const dataINIT = [
  {
    id: Math.random().toFixed(10),
    name: "Bill",
    age: 34,
  },
  {
    id: Math.random().toFixed(10),
    name: "Helen",
    age: 18,
  },
  {
    id: Math.random().toFixed(10),
    name: "Clark",
    age: 28,
  },
];

function App() {
  const [data, setData] = useState(dataINIT);
  const [statusG, setStatusG] = useState(1);
  const [description, setDecription] = useState("");

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

  const isHiddenModal = (value) => {
    console.log(value);
    if (value === 0) setStatusG(0);
  };

  const closeModal = () => {
    setStatusG(1);
  };

  const warningText = (text) => {
    //console.log(text);
    setDecription(text);
  };

  return (
    <div className="App">
      <NewUser
        newUserData={newUserAdded}
        statusHidden={isHiddenModal}
        textSaver={warningText}
      ></NewUser>
      <ModalWindow
        status={statusG}
        updatedModal={closeModal}
        textToShow={description}
      ></ModalWindow>
      <UsersList data={data} userDeletedData={removeUser}></UsersList>
    </div>
  );
}

export default App;
