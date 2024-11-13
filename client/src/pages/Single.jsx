import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

function Single() {
  const [post, setPost] = useState({});

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // getting url there are other data in the useLocation
  const location = useLocation();
  // getting post id from the url
  const postId = location.pathname.split("/")[2];

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [postId]);

  console.log(post);
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="post Image" />
        <div className="user">
          <img
            src={
              post.userImg ||
              "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted {moment(post.date).fromNow}</p>
            {/* moment will show the deffrence bettween the data from now */}
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        {/* content */}
        <h1>{post?.title}</h1>
        {post?.descrption}
      </div>
      <Menu />
    </div>
  );
}

export default Single;
