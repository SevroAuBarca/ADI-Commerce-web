import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_area sticky-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light main_box">
          <div className="container">
            <a className="navbar-brand logo_h" href="index.html">
              <img src="img/logo.jpg" alt="" style={{ width: "5rem" }} />
              ADI COMMERCE WEB
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item ">
                  <Link to="/" className="nav-link">
                    Inicio
                  </Link>
                  {/* <a className="nav-link" href="/">
                    Inicio
                  </a> */}
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    // rome-ignore lint/a11y/useValidAnchor: <explanation>
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Tienda
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="category.html">
                        Categorias
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to={"login"} className="nav-link">
                    Iniciar Sesion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"register"} className="nav-link">
                    Registrarse
                  </Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                  <a href="#" className="cart">
                    <span className="ti-bag" />
                  </a>
                </li>
                <li className="nav-item">
                  <button className="search">
                    <span className="lnr lnr-magnifier" id="search" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="search_input" id="search_input_box">
        <div className="container">
          <form action="" className="d-flex justify-content-between">
            <input
              type="text"
              className="form-control"
              id="search_input"
              placeholder="Search Here"
            />
            <button type="submit" className="btn" />
            <span
              className="lnr lnr-cross"
              id="close_search"
              title="Close Search"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
