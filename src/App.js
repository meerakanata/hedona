import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <img id="heroine" src="./Images/Heroine.png" alt="Hedona portrait" />
      <div className="main">
        <div className="streamerLinks">
          <div className="listenNow">LISTEN NOW:</div>
          <img className="streamerLinks__icon" src="./Images/Spotify_Icon.png" alt="Spotify" />
          <img className="streamerLinks__icon" src="./Images/Apple_Icon.png" alt="Apple Music" />
          <img className="streamerLinks__icon" src="./Images/YT_Icon.png" alt="YouTube Music" />
          <img className="streamerLinks__icon" src="./Images/Amazon_Icon.png" alt="Amazon Music" />
          <img className="streamerLinks__icon" src="./Images/Soundcloud_Icon.png" alt="Soundcloud" />
          <img className="streamerLinks__icon" src="./Images/Tidal_Icon.png" alt="Tidal" />
        
        
        
        </div>
        <div className="bodyCopy">
          <div className="bio">HEDONA crafts moody songs that question genres and push boundaries. Blending sounds and sonic textures that come from an eclectic mix of influences that include Björk, Kanye, YELLE, Sneaker Pimps, Portishead, Radiohead, and beyond, she’s successfully constructed a sound that’s distinctly HEDONA.
            <p>Her first single, SWIMMING, is available to stream now.</p>
          </div>
          <div className="signup">GET THE LATEST NEWS, EXCLUSIVES, AND MORE:
            <div className="signup__form">

            </div>
          </div>
          <div className="socials">
            <img className="socials__icon" src="./Images/TikTok_Icon.png" alt="TikTok" />
            <img className="socials__icon" src="./Images/Instagram_Icon.png" alt="Instagram" />
            <img className="socials__icon" src="./Images/TikTok_Icon.png" alt="LinkedIn" />
            <img className="socials__icon" src="./Images/Facebook_Icon.png" alt="Facebook" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
