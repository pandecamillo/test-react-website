import React from "react";
import User from "../components/user";
import { Link } from "react-router-dom";

function PageSecond() {
  return (
    <div>
      <h1>Second Page</h1>
      <User />
      <Link to="/" class="link">
        Go back to Home
      </Link>
    </div>
  );
}
export default PageSecond;
