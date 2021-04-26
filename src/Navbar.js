import React, { useState } from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import { VscLibrary } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
import { MdCreateNewFolder } from "react-icons/md";

const Fcards = ({ ...item }) => {
  const { icon, text, link, key } = item;

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
  const { text, link } = data;
  return <h1 className="p-card">{text}</h1>;
};
const features = [
  { id: 1, icon: <TiHomeOutline />, text: "Home", link: "/Home" },
  { id: 2, icon: <BsSearch />, text: "Search", link: "/Search" },
  { id: 3, icon: <VscLibrary />, text: "Your Library", link: "/Playlists" },
];
const Playlist_data = [
  { text: "Playlist 1", link: "/Home" },
  { text: "Playlist 2", link: "/Search" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
  { text: "Playlist 2222", link: "/Playlists" },
  { text: "Playlist 3", link: "/Playlists" },
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
        {Playlist_data.map((item) => (
          <Playlist {...item} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
