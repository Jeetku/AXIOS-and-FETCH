import axios from "axios";
import React, { useState } from "react";

const AxiosPost = () => {
  let API = "https://jsonplaceholder.typicode.com/comments";
  const [formData, setformData] = useState({
    name: "",
    email: "",
  });

  const handleInput = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API, { formData }).then((res) => {
      console.log(formData);
    });
  };

  return (
    <>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleInput}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={handleInput}
          />
        </label>
        <button type="submit" value="">
          Submit
        </button>
        <button type="reset" value="">
          Reset
        </button>
      </form>
    </>
  );
};

export default AxiosPost;
