import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate(); 

  const handelSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/", { name, email, password })
      .then((result) => {
        console.log(result.data);
     
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      
      });
  };

  return (
    <>
      <div className="Loginmain">
        <div className="login">
          <form onSubmit={handelSubmit} className="loginFrom">
            <h1>Signup</h1>
            <input
              placeholder="Name"
              value={name}
              type="text"
              name="name"
              required
              onChange={(e) => setname(e.target.value)}
            />
            <input
              placeholder="email"
              value={email}
              required
              name="email"
              type="email"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              required
              value={password}
              name="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
