import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  let DUMMY_LIST = [
    { username: "Alison", age: 27, id: Math.random().toString() },
    { username: "Jane", age: 25, id: Math.random().toString() },
    { username: "April", age: 22, id: Math.random().toString() },
  ];
  //will trigger re-render
  const [userList, setUserList] = useState(DUMMY_LIST);
  const addUserHandler = (users) => {
    setUserList((prevState) => {
      return [users, ...prevState];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList items={userList}></UsersList>
    </>
  );
}

export default App;
