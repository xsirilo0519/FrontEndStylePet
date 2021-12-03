import React, { useContext } from "react";
import { MenuNoLogin, MenuLogin } from "../Structures/Menus";
import Menu from "./Menu";
import "../Style/Navbar.css";
import logo from "../assets/paws.png";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

function NavBar() {
  const { isLogin } = useContext(UserContext);

  return (
    <div className="Navbar-container">
      <img src={logo} alt="logo" />
      <div className="Navbar-container-buttons">
        <Menu Menu={MenuNoLogin}></Menu>
        {isLogin ? <Menu Menu={MenuLogin}></Menu> : null}
        {isLogin ? (
          <Link to="/Cerrar" className="Menu-Button">
            Cerrar sesion
          </Link>
        ) : (
          <Link to="/login" className="Menu-Button">
            Acceder
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
