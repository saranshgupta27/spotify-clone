import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Audio from "./Audio";
import "./Player.css";
function Player({ spotify }) {
  return (
    <div className="player">
      <div id="info-area">
        <Navbar />
        <Content />
      </div>
      <Audio />
    </div>
  );
}

export default Player;
