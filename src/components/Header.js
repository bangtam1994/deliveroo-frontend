import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header>
      <div class="container">
        <img src={logo} alt="logo deliveroo" />
      </div>

      <hr className="hr white" />
    </header>
  );
}

export default Header;
