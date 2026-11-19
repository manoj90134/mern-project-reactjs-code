import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/"> Home Page</Link>
      <Link to="/about">About Us</Link>
    </div>
  );
};

export default Navigation;
