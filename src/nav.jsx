import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className={props.theme}>
      <h3>SanberCode</h3>
      <ul>
        <Link to="/tugas9">
          <li>Tugas 9</li>
        </Link>
        <Link to="/tugas10">
          <li>Tugas 10</li>
        </Link>
        <Link to="/tugas11">
          <li>Tugas 11</li>
        </Link>
        <Link to="/tugas12">
          <li>Tugas 12</li>
        </Link>
        <Link to="/tugas13">
          <li>Tugas 13</li>
        </Link>
        <Link to="/tugas14">
          <li>Tugas 14</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
