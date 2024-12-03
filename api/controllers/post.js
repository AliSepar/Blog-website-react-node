import { db } from "../db.js";
import jwt from "jsonwebtoken";

//all posts
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts where catagory = ?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    //if no error
    return res.status(200).json(data);
  });
};

//single post
export const getPost = (req, res) => {
  const q =
    "SELECT p.id ,`username`, `title`, `descrption`, `catagory` ,p.img, u.img as userImg ,`date` from user u join posts p ON u.id = p.uid WHERE p.id =?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
    // becouse we fetch only one item so we send one item in array res
  });
};

export const addPost = (req, res) => {
  // check the auth and the post belog to us
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtKey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid!");

    const q =
      "INSERT INTO posts(`title`, `descrption`, `catagory`, `img`, `date`, `uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.descrption,
      req.body.catagory,
      req.body.img,
      req.body.date,
      userInfo.id,
    ];
    console.log(values);

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  // check the auth and the post belog to us
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtKey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid!");

    // if ok
    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id`=? AND `uid` = ?";
    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your posts!");

      return res.status(200).json("post has been deleted.");
    });
  });
};

export const updatePost = (req, res) => {
  // check the auth and the post belog to us
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtKey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid!");

    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?, `descrption`=?, `catagory`=?, `img`=? WHERE `id`=? AND `uid`=?";

    const values = [
      req.body.title,
      req.body.descrption,
      req.body.catagory,
      req.body.img,
    ];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      //if no problem success respond
      return res.json("Post has been updated.");
    });
  });
};
