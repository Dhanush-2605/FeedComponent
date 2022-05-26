import React from "react";
import classes from "./header.module.css";
const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/720/720236.png"
          alt="user-profile"
        ></img>

        <h2>Dummy User</h2>
        <h7>5 days ago</h7>
        <button>React</button>
        <p id="posted">posted in General</p>
      </div>
      <div className={classes.detail}>
        <p>...</p>
      </div>
    </div>
  );
};

export default Header;
