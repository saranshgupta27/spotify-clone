import React, { useState } from "react";
import "./Navbar.css";
import { useDataLayerValue } from "./DataLayer";
import { BsSearch } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import { VscLibrary } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
import { MdCreateNewFolder } from "react-icons/md";

const Fcards = ({ ...item }) => {
  const { icon, text, key } = item;

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
const Playlist = ({ ...data }) => {
  const { name } = data;
  return <h1 className="p-card">{name}</h1>;
};
const features = [
  { id: 1, icon: <TiHomeOutline />, text: "Home", link: "/Home" },
  { id: 2, icon: <BsSearch />, text: "Search", link: "/Search" },
  { id: 3, icon: <VscLibrary />, text: "Your Library", link: "/Playlists" },
];

function Navbar() {
  const [{ playlists }] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="Nav">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
        id="nav-logo"
      />
      <div className="side-features">
        {features.map((item) => (
          <Fcards {...item} />
        ))}
      </div>

      <div className="side-features" id="side-features-2">
        <Fcards
          {...{
            id: 4,
            icon: <MdCreateNewFolder />,
            text: "Create Playlist",
            link: "/Create_Playlist",
          }}
        />

        <Fcards
          {...{
            id: 5,
            icon: <FcLike />,
            text: "Liked Songs",
            link: "/Liked_Songs",
          }}
        />
      </div>

      <div className="playlist">
        {playlists?.items?.map((item) => (
          <Playlist {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
