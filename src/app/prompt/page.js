"use client";
import React, { useState, useEffect } from "react";
import getPromptData from "../api/getPrompts/page";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPromptData();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
