import React, { useState } from "react";

const FetchPost = () => {
  let API = "https://jsonplaceholder.typicode.com/comments";
  const [formData, setformData] = useState({
    name: "",
    email: "",
  });

  const fetchPost = async (url) => {
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   " Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((res) => console.log(res));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleInput = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fetchPost(API));
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

export default FetchPost;
