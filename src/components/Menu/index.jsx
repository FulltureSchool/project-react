import "./style.css";
import Logo from "../../assets/logo.svg";
import CloseMenu from "../../assets/icon-close-menu.svg";
import MenuIcon from "../../assets/icon-menu.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <img alt="" src={Logo} />

        <ul style={{ display: isOpen ? "flex" : "none" }}>
          <di id="close" onClick={handleMenu}>
            <img alt="" src={CloseMenu} />
          </di>
          <li>
            <a href="#feat">
              Features <MdOutlineKeyboardArrowDown />
            </a>

            <ul>
              <li>
                <a href="#todolist">Todo List</a>
              </li>
              <li>
                <a href="#calendar">Calendar</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#about">
              Company <MdOutlineKeyboardArrowDown />
            </a>

            <ul>
              <li>
                <a href="#history">History</a>
              </li>
              <li>
                <a href="#ourteam">Our Team</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="disabled" href="#contact">
              Careers
            </a>
          </li>
          <li>
            <a href="#contact">Abolt</a>
          </li>

          <di className="login">
            <li>
              <a href="#login">Login</a>
            </li>
            <li>
              <a className="button" href="#blog">
                Register
              </a>
            </li>
          </di>
        </ul>

        <img alt="" onClick={handleMenu} id="hamburguer" src={MenuIcon} />
      </nav>
    </header>
  );
};
