import React, { useState } from "react";
import "./Audio.css";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import LoopIcon from "@material-ui/icons/Loop";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GiMicrophone from "react-icons/gi";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import DevicesIcon from "@material-ui/icons/Devices";

function Audio() {
  const [mediaImg, setimg] = useState("");
  const [trackname, settrack] = useState("HEHEHE SONG");
  const [artist, setartist] = useState("HEHE SINGER");
  const [isSelected, setSelected] = useState(false);

  const toggleColor = () => setSelected((prevState) => !prevState);

  return (
    <div className="audio">
      <div className="media_info">
        <img src={mediaImg} />
        <h1 className="track-name">{trackname}</h1>
        <h2 className="artist">{artist}</h2>
      </div>
      <div className="like">
        <FavoriteIcon />
      </div>
      <div className="track">
        <ShuffleIcon
          style={isSelected ? { color: green[500] } : { color: yellow[500] }}
          onClick={toggleColor}
        />
        <SkipPreviousIcon />
        <PlayCircleFilledWhiteIcon />
        <SkipNextIcon />
        <LoopIcon
          style={isSelected ? { color: green[500] } : { color: yellow[500] }}
          onClick={toggleColor}
        />
      </div>
      <div className="side-options"></div>
    </div>
  );
}

export default Audio;
