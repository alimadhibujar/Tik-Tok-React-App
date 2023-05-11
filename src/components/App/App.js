import React, { useState, useEffect } from "react";
import "./app.css";
import Video from "../Video/Video";

function App() {
  const [videos, setVideos] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://alimadhibujar.github.io/Tik-Tok-React-App/data.json"
        );
        const listVideos = await response.json();
        setVideos(listVideos);
        setFetchError(null);
      } catch (err) {
        setFetchError(`There was an error, ${err}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        {!isLoading && !fetchError ? (
          <div className="app_videos">
            {videos.map(
              ({
                url,
                channel,
                description,
                song,
                likes,
                messages,
                shares,
              }) => (
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
        ) : (
          <div className="loading">{fetchError || "Loading..."}</div>
        )}
      </div>
      <p className="app-info">
        Click on the video to play or to pause it, also scroll the videos to see
        them all. Happy watching :)
      </p>
    </div>
  );
}

export default App;
