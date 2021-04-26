import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromLogin } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getTokenFromLogin().access_token);
    window.location.hash = "";

    if (token) {
      spotify.setAccessToken(token);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, []);

  // return <div className="App">{token ? <Player /> : <Login />}</div>;
  return (
    <div className="App">
      <Player />
    </div>
  );
}

export default App;
