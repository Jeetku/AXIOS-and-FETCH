import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosDelete = () => {
  const [users, setUsers] = useState([]);
  //   let API = "https://jsonplaceholder.typicode.com/users";

  const resultGet = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: {
          companyId: "447841256515221455",
        },
      })
      .then((res) => setUsers(res.data));
  };

  useEffect(() => {
    resultGet();
  }, []);

  const deleteUser = (id, e) => {
    e.preventDefault();
    try {
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          console.log("Deleted", res);
          resultGet();
        });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
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
                  <button onClick={(e) => deleteUser(item.id, e)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AxiosDelete;
