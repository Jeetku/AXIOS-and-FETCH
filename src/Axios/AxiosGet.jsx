import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosGet = () => {
  let API = "https://jsonplaceholder.typicode.com/comments";
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(API, {
        headers: {
          companyId: "447841256515221455",
        },
      })
      .then((res) => setComments(res.data));
  }, [API]);

  return (
    <div>
      <select name="" id="">
        {comments.map((item) => (
          <option value="" key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <select name="" id="">
        {comments.map((item) => (
          <option key={item.id}>{item.email}</option>
        ))}
      </select>
    </div>
  );
};

export default AxiosGet;
