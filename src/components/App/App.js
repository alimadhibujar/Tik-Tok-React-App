import React from "react";
import { useState, useEffect } from "react";
import "./app.css";
import Video from "../Video/Video";
import data from "../../assets/data.json";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // fetch('../../assets/data.json')
    // .then(response => response.json())
    // .then(data => setVideos(data));
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
