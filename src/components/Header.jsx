import React from "react";
import style from '../styles/header.module.css';
import Navegacion from "./Navegacion";

const Header = () => {
  return (
    <>
      <div className={style.container}>
        <h1>The Weather</h1>

        <div className={style.navegacion}>
            <Navegacion />
        </div>
        
      </div>
    </>
  );
};

export default Header;
