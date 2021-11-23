import React, { useState } from "react";
import "./app.css";
import Video from "../Video/Video";

function App() {
  const [videos] = useState([
    {
      url: "https://res.cloudinary.com/dwpp1insg/video/upload/v1636470265/tik-tok/Kemisha_shkon_shume_ildpgv.mp4",
      channel: "Membersi",
      description: "#Atletet 25, #pantallonat 15 😂, këmisha shkon, po shkon 30 e ca 😂",
      song: "Bounce - Ruger",
      likes: 12400,
      messages: 163,
      shares: 40,
    },
    {
      url: "https://res.cloudinary.com/dwpp1insg/video/upload/v1636471056/tik-tok/ola_ola023_-_6990027201517227270_daxgfm.mp4",
      channel: "ola_ola023",
      description: "Po çfarë jete po bën ti? # çantën #në krahë #kokrrën e qefit 😂 u bën votimet unë vizhguse 😂 videos on TikTok",
      song: "",
      likes: 17500,
      messages: 320,
      shares: 74,
    },
    {
      url: "https://res.cloudinary.com/dwpp1insg/video/upload/v1636536955/tik-tok/Can_yours_do_that_boyya1.mp4",
      channel: "coco224466",
      description: "Can yours do that?😡😛🥺🤪#pet #dogs #fouyou #animals #cute #funnyvideo #fy #dogsoftiktok #puppy #poodle",
      song: "Cute Emoji Song",
      likes: 4235000,
      messages: 43000,
      shares: 450,
    },
  ]);
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({autoplay, url, channel, description, song, likes, messages, shares }) => (
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
  );
}

export default App;
