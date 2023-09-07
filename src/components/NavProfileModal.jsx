import "../styles/NavProfileModal.css";

function NavProfileModal() {
  const profileMenu = ["Manage Profiles", "Account", "Help Center", "Log Out"];

  return (
    <div>
      <div className="navProfileModal__container">
        <ul className="navProfileModal__menu">
          {profileMenu.map((profileItem, index) => (
            <li key={index}>{profileItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavProfileModal;
