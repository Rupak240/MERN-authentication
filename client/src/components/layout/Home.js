import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user, logoutUser } = authContext;

  const onLogout = () => {
    logoutUser();
  };

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <h1>
        Hello, <span className="text-primary">{user && user.name}</span>
      </h1>
      <p>You're logged in</p>
      <a onClick={onLogout} href="#!">
        Logout
      </a>
    </Fragment>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "60vh",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.8rem",
      }}
    >
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
};

export default Home;
