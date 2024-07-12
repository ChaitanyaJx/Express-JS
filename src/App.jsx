import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users")
    .then((response) => {
      console.log(response.data)
      setUsers(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  return(
    <>
    <h1>Users</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>Name is {user.name} and my Grade is {user.grade}</li>
      ))}
    </ul>
    </>
  )
}

export default App;