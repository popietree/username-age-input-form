import styles from "./UsersList.module.css";
import Card from "../Card/Card";

const UsersList = (props) => {
  const listOfUsers = props.items.map((el) => (
    <li key={el.id} username={el.username} age={el.age}>
      {el.username}: {el.age} years old
    </li>
  ));

  return (
    <Card className={styles.users}>
      <ul>{listOfUsers}</ul>
    </Card>
  );
};

export default UsersList;
