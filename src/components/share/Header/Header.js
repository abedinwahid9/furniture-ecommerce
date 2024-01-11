import React from "react";
import MainNav from "../Navbar/MainNav";
import Logo from "../Logo/Logo";

const Header = ({ children }) => {
  return (
    <div>
      <MainNav></MainNav>
      <Logo></Logo>
      {children}
    </div>
  );
};

export default Header;
