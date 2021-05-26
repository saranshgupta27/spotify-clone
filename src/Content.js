import React from "react";
import "./Content.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import GetAppIcon from "@material-ui/icons/GetApp";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Track = () => (
  <>
    <div className="track-audio">
      <p>1</p>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64c72857183915.59cbcc586d1d1.jpg"
        alt="user"
        className="track-pic"
      />
      <div className="track-data">
        <h1>Track Title</h1>
        <h2>Artists</h2>
      </div>
    </div>
  </>
);

function Content() {
  return (
    <div className="content">
      <div className="user-details">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png"
          alt="user"
          className="profile-pic"
        />
        <h1 className="user-name-text">USER NAME</h1>
      </div>
      <div className="playlist-header">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64c72857183915.59cbcc586d1d1.jpg"
          alt="playlist"
          className="playlist-img"
        />
        <div className="header-text">
          <h3>Playlist</h3>
          <h1>Playlist Name</h1>
          <p>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>
      </div>
      <div className="playlist">
        <div className="playlist-controls">
          <div className="playlist-controls-icon">
            <PlayCircleFilledWhiteIcon
              style={{ fontSize: "3em", color: "rgb(0, 146, 87)" }}
            />
            <FavoriteIcon
              style={{ fontSize: "2.5em", color: "rgb(0, 146, 87)" }}
            />
            <GetAppIcon style={{ fontSize: "2em" }} />
            <MoreHorizIcon style={{ fontSize: "2.2em" }} />
          </div>

          <div className="custom-box">
            <SearchIcon style={{ marginRight: "20px" }} />
            <p className="custom">Custom order</p>
            <ArrowDropDownIcon />
          </div>
        </div>

        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
      </div>
    </div>
  );
}

export default Content;
