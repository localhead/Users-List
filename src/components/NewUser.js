import React, { useState } from "react";

import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitEventHandler = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      age: age,
      id: Math.random(),
    };

    setName("");
    setAge("");

    props.newUserData(newUser);
  };

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <form className={styles["new-user-form"]} onSubmit={submitEventHandler}>
      <div className={styles["new-user-form__name"]}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={changeNameHandler}
          required
        ></input>
      </div>
      <div className={styles["new-user-form__age"]}>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={changeAgeHandler}
          required
        ></input>
      </div>
      <button type="submit" className={styles["new-user-from__btn"]}>
        Add User
      </button>
    </form>
  );
};

export default NewUser;
