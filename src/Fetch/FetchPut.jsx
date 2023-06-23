import React, { useState, useEffect } from "react";

const FetchPut = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(null);

  const FetchItem = async (url) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
          companyId: "447841256515221455",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setUsers(json);
          setName(json[0].name);
          setUserName(json[0].username);
          setEmail(json[0].email);
          setUserId(json[0].id);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    FetchItem();
  }, []);

  async function deleteUser(id) {
    // e.preventDefault();
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          FetchItem();
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  const SelectUser = (id) => {
    // e.preventDefault();
    console.log("update", users[id - 1]);
    let item = users[id - 1];
    setName(item.name);
    setUserName(item.username);
    setEmail(item.email);
    setUserId(item.id);
  };

  const updateUser = async () => {
    let item = { name, email, userName, userId };
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          FetchItem();
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {" "}
      <table border="1">
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>UserName</td>
            <td>Email</td>
          </tr>
          {users &&
            users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
                  <button onClick={() => SelectUser(item.id)}>Update</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="username"
          value={userName}
          name="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <button onClick={updateUser}>Update</button>
      </div>
    </div>
  );
};

export default FetchPut;
