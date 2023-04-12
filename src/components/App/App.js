import React from "react";
import { useState, useEffect } from "react";
import "./app.css";
import Video from "../Video/Video";
import data from "../../assets/data.json";

function App() {
  const [videos, setVideos] = useState([data]);
  // for local fetch json data should be in public folder
  // const getVideos = async () => {
  //   const response = await fetch(
  //     "http://localhost:3000/Tik-Tok-React-App/data.json"
  //   );
  //   const data = await response.json();
  // setVideos(data);
  // };

  useEffect(() => {
    // getVideos();
    setVideos(data);
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        <div className="app_videos">
          {videos.map(
            ({ url, channel, description, song, likes, messages, shares }) => (
              <Video
                key={url}
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
