import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
        await axios.post("/api/auth/register", inputs);
        navigate("/login");
      } catch (error) {
        setError(error.response.data);
      }
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
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
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          required
          name="password"
          type="password"
          placeholder="Password"
        />
        {error && <p>{error}</p>}
        <button onClick={handleSubmit}>Register</button>
        <span>
          Do you have a account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
