import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts where catagory = ?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    //if no error
    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const q =
    "SELECT `username`, `title`, `descrption`, `catagory` ,p.img, u.img as userImg ,`date` from user u join posts p ON u.id = p.uid WHERE p.id =?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
    // becouse we fetch only one item so we send one item in array res
  });
};

export const addPost = (req, res) => {
  res.json("from post controller");
};

export const deletePost = (req, res) => {
  res.json("from post controller");
};

export const updatePost = (req, res) => {
  res.json("from post controller");
};
