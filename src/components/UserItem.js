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
        <div className={styles["user-item-inner__id"]}>{props.id}</div>
        <div className={styles["user-item-inner__name"]}>{props.name}</div>
        <div className={styles["user-item-inner__age"]}>{props.age}</div>
        <button
          className={styles["user-item-inner__button"]}
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;
