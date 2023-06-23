import React, { useEffect, useState } from "react";

const FetchGet = () => {
  let API = "https://jsonplaceholder.typicode.com/comments";
  const [comment, setComment] = useState([]);
  const fetchApi = async (url) => {
    try {
      await fetch(url, {
        headers: {
          companyId: "447841256515221455",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setComment(json);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi(API);
  }, [API]);

  return (
    <div>
      <h2>Welcome</h2>
      {comment.map((item) => (
        <h5 key={item.id}>{item.email}</h5>
      ))}
    </div>
  );
};

export default FetchGet;
