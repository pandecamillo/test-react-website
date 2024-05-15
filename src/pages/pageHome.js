import React from "react";
import { Link } from "react-router-dom";

function PageHome() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        This is my own React Template to start Front End of a website from Zero
        easly, Now it's time to code !
      </p>
      <Link to="second" class="link">
        {" "}
        Go to Second Page
      </Link>
    </div>
  );
}

export default PageHome;
