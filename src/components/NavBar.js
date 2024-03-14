import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkelemnt = links.map((link) =>{
    let href = `#${link}`;
    return(<a  key={link} href={href}>{link}</a>)
  });

  return <nav>{linkelemnt}</nav>;
}

export default NavBar;
