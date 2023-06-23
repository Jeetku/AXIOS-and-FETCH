import React, { useEffect, useState } from "react";

const FetchDelete = () => {
  const [users, setUsers] = useState([]);

  const DeleteItem = async (url) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
          companyId: "447841256515221455",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setUsers(json);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    DeleteItem();
  }, []);

  async function deletUser(id) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error.message);
    }
  }

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
                  <button onClick={() => deletUser(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchDelete;
