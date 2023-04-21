import React from "react";
import {v4 as uuid} from "uuid"

function NavBar() {
  const links = ["Home", "About", "Projects"];

  return <nav>{links.map((link)=> <a key={uuid()}href={`#${link}`}>{link}</a> )}</nav>;
}

export default NavBar;
