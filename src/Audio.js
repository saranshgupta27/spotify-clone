import React, { useState } from "react";
import "./Audio.css";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import green from "@material-ui/core/colors/green";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import LoopIcon from "@material-ui/icons/Loop";
import FavoriteIcon from "@material-ui/icons/Favorite";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import DevicesIcon from "@material-ui/icons/Devices";

function Audio() {
  const [mediaImg, setimg] = useState(
    "https://i.scdn.co/image/ab67616d0000b273e7c85d5f2f3ca556be23437b"
  );
  const [trackname, settrack] = useState("HEHEHE SONG");
  const [artist, setartist] = useState("HEHE SINGER");
  const [isSelected, setSelected] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="audio">
      <div className="media_info">
        <img src={mediaImg} alt="media" className="album-img" />
        <div>
          <h1 className="track-name">{trackname}</h1>
          <h2 className="artist">{artist}</h2>
        </div>
      </div>
      <FavoriteIcon className="like-button" />
      <div className="track">
        <ShuffleIcon
          style={isSelected ? { color: green[500] } : { color: "white" }}
          onClick={() => setSelected(!isSelected)}
        />
        <SkipPreviousIcon />
        {playing ? (
          <PauseCircleFilledIcon onClick={() => setPlaying(!playing)} />
        ) : (
          <PlayCircleFilledWhiteIcon onClick={() => setPlaying(!playing)} />
        )}
        <SkipNextIcon />
        <LoopIcon
          style={shuffle ? { color: green[500] } : { color: "white" }}
          onClick={() => setShuffle(!shuffle)}
        />
      </div>
      <div className="side-options">
        <QueueMusicIcon />
        <FullscreenIcon />
        <DevicesIcon />
        <VolumeUpIcon />
      </div>
    </div>
  );
}

export default Audio;
