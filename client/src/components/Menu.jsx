import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu({ cat }) {
  const [posts, setPosts] = useState([]);

  //note : only show limited posts and latest post and not the post currently reading
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cat]);

  // don't show the post which is in the single page in the menus!

  return (
    <div className="menu">
      <h1>Other post you amy like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <Link className="link" to={`/post/${post.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;
