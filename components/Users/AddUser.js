import Card from "../Card/Card";
import Wrapper from "../Helpers/WrapperComponent";
import styles from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import { useState, useRef } from "react";
import ErrorModule from "../UI/Button/ErrorModule/ErrorModule";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [input, setUserInput] = useState([]);
  // const [isValidUser, setValidUser] = useState(true);
  // const [isValidAge, setValidAge] = useState(true);
  // const [hideError, sethideError] = useState(true);
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  //   if (event.target.value.trim().length > 0) setValidUser(true);
  // };

  // const ageChangeHandler = (event) => {
  //   if (event.target.value > 0) setValidUser(true);

  //   setEnteredAge(event.target.value);
  // };
  const addUserSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    //have typed username and age?
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      // setValidUser(false);
      // sethideError(false);
      //settign ERROR STATE
      setError({
        title: "invalide input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      // setValidAge(false);
      // sethideError(false);

      setError({
        title: "invalide age",
        message: "Please enter a age greater than 0",
      });
      return;
    }

    //excute only if valid input
    const userData = {
      username: enteredName,
      age: enteredUserAge,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
    //Nno longer need state to get value with ref
    // setEnteredUsername("");
    // setEnteredAge("");

    //RARELY use refs to manipulate the DOM
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const ErrorConfirmHandler = () => {
    setError(null);
    console.log("err");
  };
  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={ErrorConfirmHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserSubmitHandler}>
          <label>Username</label>
          <input
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label>Age (Years)</label>
          <input
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
        </form>
        <Button onClick={addUserSubmitHandler} type="submit">
          Add User
        </Button>
      </Card>
    </div>
  );
};

export default AddUser;
