import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <h2 className={style.title}>Expense tracker</h2>
    </div>
  );
}

export default Header;
