import React, { useState } from "react";

import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitEventHandler = (event) => {
    event.preventDefault();

    if (name === "" || age === "") {
      setName("");
      setAge("");
      props.textSaver("Please enter a valid name and age (non-empty values)");
      return props.statusHidden(0);
    }

    if (Number(age) <= 0) {
      setName("");
      setAge("");
      props.textSaver("Please enter a valid age (>0)");
      return props.statusHidden(0);
    }

    const newUser = {
      name: name,
      age: age,
      id: Math.random().toFixed(10),
    };

    setName("");
    setAge("");
    props.statusHidden(1);
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
        <input type="text" value={name} onChange={changeNameHandler}></input>
      </div>
      <div className={styles["new-user-form__age"]}>
        <label>Age</label>
        <input type="number" value={age} onChange={changeAgeHandler}></input>
      </div>
      <button type="submit" className={styles["new-user-from__btn"]}>
        Add User
      </button>
    </form>
  );
};

export default NewUser;
