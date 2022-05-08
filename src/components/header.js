import React from "react";

export default function Header() {
  return (
    <header>
      <img
        className="header-logo"
        src={process.env.PUBLIC_URL + "/images/globe.png"}
        alt=""
      />
      <h3 className="header-title">my travel journal.</h3>
    </header>
  );
}
