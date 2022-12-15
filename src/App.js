import React from "react";
import SpotifyPlayer from 'react-spotify-player';
import './App.css';
import Mailchimp from "react-mailchimp-form";

 
//size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 100,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'


function App() {
  return (
    <div className="App">
      <div className="main">
      <img id="heroine" src="./Images/Heroine.png" alt="Hedona portrait"/>
      <img id="heroinePortrait" src="./Images/Heroine_portrait.png" alt="Hedona portrait" />
        <div className="bodyContainer">
          {/* <div className="embed">
            <SpotifyPlayer
              uri="spotify:track:6ww7BOQqaSwgx1dXxZQP6D"
              size={size}
              view={view}
              theme={theme}
            />
          </div> */}
          <div className="streamers">
            <div className="spotifyEmbed"><SpotifyPlayer
              uri="spotify:track:6ww7BOQqaSwgx1dXxZQP6D"
              size={size}
              view={view}
              theme={theme}
            /></div>
            <div className="streamers__listenNow">LISTEN NOW:</div>
            <div className="streamers__links">
            <a href="https://open.spotify.com/album/2xiekc7RMG2fzofLQZTeyP" target="_blank" rel="noreferrer"><img className="streamers__links-icons" src="./Images/Spotify_Icon.png" alt="Spotify" /></a>
            <a href="https://music.apple.com/album/id/1639053827" target="_blank" rel="noreferrer"><img className="streamers__links-icons" src="./Images/Apple_Icon.png" alt="Apple Music" /></a>
            <a href="https://music.youtube.com/watch?v=NQoN1_Ny-b8" target="_blank" rel="noreferrer"><img className="streamers__links-icons" src="./Images/YT_Icon.png" alt="YouTube Music" /></a>
            <a href="https://music.amazon.com/albums/B0B96R7F3Q" target="_blank" rel="noreferrer"><img className="streamers__links-icons" src="./Images/Amazon_Icon.png" alt="Amazon Music" /></a>
            <a href="https://soundcloud.com/user-112780443/swimming-hedona" target="_blank" rel="noreferrer"><img className="streamers__links-icons" src="./Images/Soundcloud_Icon.png" alt="Soundcloud" /></a>
            <a href="https://listen.tidal.com/album/242386424" target="_blank" rel="noreferrer"><img className="streamers__links-icons" src="./Images/Tidal_Icon.png" alt="Tidal" /></a>
            </div>
          </div>
          <div className="bodyCopy">
            <div className="spotifyEmbedWideView">
          <SpotifyPlayer
              uri="spotify:track:6ww7BOQqaSwgx1dXxZQP6D"
              size={size}
              view={view}
              theme={theme}
            /></div>
            <div className="bodyCopy__bio">HEDONA crafts moody songs that question genres and push boundaries. Blending sounds and sonic textures that come from an eclectic mix of influences that include Björk, Kanye, YELLE, Sneaker Pimps, Portishead, Radiohead, and beyond, she’s successfully constructed a sound that’s distinctly HEDONA.
              <p>Her first single, SWIMMING, is available to stream now.</p>
            </div>
            <div className="bodyCopy__signup">GET THE LATEST NEWS, EXCLUSIVES, AND MORE:
                <Mailchimp action='https://gmail.us17.list-manage.com/subscribe/post?u=e33d309c6388144648843d6ae&amp;id=bf5dcdd7b6&amp;f_id=002546e0f0'
                  fields={[
                    {
                      name: 'EMAIL',
                      placeholder: 'YOUR EMAIL HERE',
                      type: 'email',
                      required: true
                    }
                  ]}  messages = {
                    {
                      sending: "Sending...",
                      success: "Thank you for signing up!",
                      error: "An unexpected internal error has occurred.",
                      empty: "You must write an e-mail.",
                      duplicate: "Too many sign up attempts for this email address",
                      button: "SIGN UP"
                    }
                  }/>
            </div>
            <div className="bodyCopy__socials">
              <a href="https://www.tiktok.com/@hedona.music" target="_blank" rel="noreferrer"><img className="bodyCopy__socials-icon" src="./Images/TikTok_Icon.png" alt="TikTok" /></a>
              <a href="https://www.instagram.com/hedona.music/" target="_blank" rel="noreferrer"><img className="bodyCopy__socials-icon" src="./Images/Instagram_Icon.png" alt="Instagram" /></a>
              <a href="https://www.facebook.com/HEDONAmusic" target="_blank" rel="noreferrer"><img className="bodyCopy__socials-icon" src="./Images/Facebook_Icon.png" alt="Facebook" /></a>
              <a href="https://www.linkedin.com/company/hedona-music/" target="_blank" rel="noreferrer"><img className="bodyCopy__socials-icon" src="./Images/LinkedIn_Icon.png" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
          <div>Site design and development by {<a href="https://www.meerashah.ca" target="_blank" rel="noreferrer">Meera Shah</a>}. </div>
          <div>Copyright © 2022 HEDONA</div>
      </div>
    </div>
  );
}

export default App;
