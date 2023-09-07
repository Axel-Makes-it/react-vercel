import Logo from "../images/Logo.png";
import searchIcon from "../images/search.svg";
import downIcon from "../images/down.svg";
import "../styles/Nav.css";
import { useState, useEffect, useRef } from "react";
import NavProfileModal from "./NavProfileModal";

function Nav() {
  const menu = ["Home", "TV", "Movies", "My Stuff", "Hubs"];
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const selectMenuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    // I'm checking if the click is outside the select menu and
    // not on the toggle button or its text
    if (
      selectMenuRef.current &&
      !selectMenuRef.current.contains(event.target) &&
      event.target.className !== "nav__menu__selected" &&
      !event.target.closest(".nav__menu__selected")
    ) {
      setMenuVisible(false);
    }
  };

  return (
    <>
      <div className="nav__container">
        <div className="nav__logo__container">
          <img src={Logo} alt="Logo" width={60.89} height={20} />
        </div>

        <ul className="nav__ul">
          {menu.map((menuItem, index) => (
            <li key={index} className="nav__menu__btn">
              {menuItem}
            </li>
          ))}
        </ul>

        {/*The modal menu selector*/}
        <ul className="nav__menu__selected" onClick={toggleMenu}>
          <li>Home</li>
          <li>
            <img src={downIcon} alt="dropdown-icon" />
          </li>
        </ul>

        <ul className="nav__profile__container">
          <li className="nav__search__container">
            <img src={searchIcon} alt="search" width={27} height={27} />
          </li>
          <li className="nav__profile">
            <p>A</p>
          </li>
        </ul>
      </div>
      <>
        {/*The modal menu for smaller screen*/}
        <div className="nav__select__container" ref={selectMenuRef}>
          <ul
            className="nav__select__menu"
            style={{ display: menuVisible ? "block" : "none" }}
          >
            {menu.map((menuItem, index) => (
              <li key={index} className="nav__select__btn">
                {menuItem}
              </li>
            ))}
          </ul>
        </div>
        <NavProfileModal />
      </>
    </>
  );
}

export default Nav;
