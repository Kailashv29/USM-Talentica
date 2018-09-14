import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const NavBar = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Home </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Link to="/login">Login</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/about">About</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export default NavBar;
