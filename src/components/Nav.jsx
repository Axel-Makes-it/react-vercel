import Logo from "../images/Logo.png";
import searchIcon from "../images/search.svg";
import downIcon from "../images/down.svg";
import "../styles/Nav.css";
import { useState, useEffect, useRef } from "react";
import NavProfileModal from "./NavProfileModal";

function Nav() {
  const menu = ["Home", "TV", "Movies", "My Stuff", "Hubs"];

  const [menuVisible, setMenuVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);

  function handleModal() {
    setProfileModalVisible(!profileModalVisible);
  }

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const selectMenuRef = useRef(null);
  const profileModalRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      // Check if the click is outside the select menu or profile modal
      if (
        selectMenuRef.current &&
        !selectMenuRef.current.contains(event.target) &&
        event.target.className !== "nav__menu__selected" &&
        !event.target.closest(".nav__menu__selected")
      ) {
        setMenuVisible(false);
      }

      // Check if the click is outside the profile modal
      if (
        profileModalRef.current &&
        !profileModalRef.current.contains(event.target) &&
        event.target.className !== "nav__profile" &&
        !event.target.closest(".nav__profile")
      ) {
        setProfileModalVisible(false);
      }
    }

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

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

        {/* The modal menu selector */}
        <ul
          className="nav__menu__selected"
          onClick={toggleMenu}
          ref={selectMenuRef}
        >
          <li>Home</li>
          <li>
            <img src={downIcon} alt="dropdown-icon" />
          </li>
        </ul>

        <ul className="nav__profile__container">
          <li className="nav__search__container">
            <img src={searchIcon} alt="search" width={27} height={27} />
          </li>
          <li
            className={`nav__profile ${profileModalVisible ? "active" : null}`}
            onClick={handleModal}
            ref={profileModalRef}
          >
            <p>A</p>
          </li>
          {profileModalVisible && <NavProfileModal />}
        </ul>
      </div>
      {/* The modal menu for smaller screens */}
      <>
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
      </>
    </>
  );
}

export default Nav;