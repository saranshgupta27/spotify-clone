import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromLogin } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const _token = getTokenFromLogin().access_token;
    window.location.hash = "";

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      function getPlaylist(stoken) {
        console.log(stoken);
        fetch(
          `https://api.spotify.com/v1/users/BQAnaHOAdsotSIRruvVG6oage4HuzTdUccE0r3PKA1kA1GjN5X5dmXmUwF4uEtZbgZwoyzFv4NWk24nWOqLOujVTkMdHwWbwfa44Z5QC7zhwHqS1IKqjct7V8Pocd4C8cJWcm0_xQOld3Qgl05_BKfTfY43_GtFOH6DgQvuHaO-0XI9HyjPy/playlists`
        ).then(function (response) {
          console.log(response.json());
        });
      }
      getPlaylist(_token);
      // spotify.getUserPlaylists().then((playlists) => {
      //   dispatch({
      //     type: "SET_PLAYLISTS",
      //     playlists,
      //   });
      // });
    }
  }, [token, dispatch]);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
