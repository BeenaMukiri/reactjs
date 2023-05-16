import React, { useState } from "react";
import ApiList from "./ApiList";

const ApiHome = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
const [users, setUsers] = useState([])
  const handleDisplay = (e)=>{
    e.preventDefault();
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => setUsers(data));
      return users
  }
  return (
    <div>
      <center>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </center>
      <button onClick={handleDisplay}>Display</button>
      <ApiList users={users} />
    </div>
  );
};

export default ApiHome;
