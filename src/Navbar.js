import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import { VscLibrary } from "react-icons/vsc";

const Fcards = ({ icon, text, link, key }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <div
      className={isSelected ? "Fcards is_selected" : "Fcards"}
      key={key}
      onClick={(e) => {
        return setSelected((prevState) => !prevState);
      }}
    >
      {icon}
      <h1>{text}</h1>
    </div>
  );
};

const features = [
  { id: 1, icon: <TiHomeOutline />, text: "Home", link: "/Home" },
  { id: 2, icon: <BsSearch />, text: "Search", link: "/Search" },
  { id: 3, icon: <VscLibrary />, text: "Your Library", link: "/Playlists" },
];

function Navbar() {
  return (
    <div className="Nav">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
        id="nav-logo"
      />
      <div className="side-features">
        {features.map((item) => (
          <Fcards
            icon={item.icon}
            text={item.text}
            link={item.link}
            id={item.id}
          />
        ))}

        {/* <Fcards data={features} /> */}
      </div>
    </div>
  );
}

export default Navbar;
