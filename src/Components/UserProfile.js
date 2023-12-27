import React from "react";
import './userProfile.css';
import profile_icon from "./img/Odyssey-React-2-Flyknit.png";

const UserCard = () => {
  return (
    <div className="ups">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="Nike" />
        <div className="profile-title">Nike</div>
        <div className="profile-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sed in fuga accusantium facere asperiores a cumque molestiae consectetur sint.
        </div>
        <div className="profile-button">Contact Me</div>
      </div>
    </div>
  );
};
export default UserCard;
