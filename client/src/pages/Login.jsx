import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const allFieldsHaveValue = () => {
    return Object.values(inputs).every((value) => value !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    if (allFieldsHaveValue) {
      try {
        // await axios.post("/api/auth/login", inputs);
        await login(inputs); // this will send the request and if with 200 response will make a user info in contextApi
        navigate("/");
      } catch (error) {
        setError(error.response.data);
      }
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          onChange={handleChange}
          required
          name="username"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={handleChange}
          required
          name="password"
          type="password"
          placeholder="Password"
        />
        {error && <p>{error}</p>}
        <button onClick={handleSubmit}>Login</button>
        <span>
          Don't you have a account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
