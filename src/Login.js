import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        id="spotify-logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify-logo"
      ></img>
      <a id="login-button" href="www.google.com">
        Login With Spotify
      </a>
    </div>
  );
}

export default Login;
