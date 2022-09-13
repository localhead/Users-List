import styles from "./UserItem.module.css";

const UserItem = (props) => {
  //console.log(props);

  const deleteHandler = (event) => {
    event.preventDefault();
    //console.log(props.name);
    props.deleteUser(props.id);
  };

  return (
    <div className={styles["users-item-content"]}>
      <div className={styles["user-item-inner"]}>
        {" "}
        <div>User ID {props.id}</div>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default UserItem;
