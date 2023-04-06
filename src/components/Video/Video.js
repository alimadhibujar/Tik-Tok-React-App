import React, { useEffect, useRef, useState } from "react";
import "./video.css";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
import useIntersectionObserver from "../CustomHook/useIntersectionObserver";
import VideoPlayButton from "../VideoPlayButton/VideoPlayButton";
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.3,
    rootMargin: "0px",
  });
  const onVideoClick = () => {
    if (playing) {
      ref.current.pause();
      setPlaying(!playing);
    } else {
      ref.current.play();
      setPlaying(!playing);
    }
  };
  useEffect(() => {
    if (isVisible) {
      if (!playing) {
        ref.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        ref.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisible]);

  return (
    <div className="video">
      <video
        className="video_player"
        loop
        preload="true"
        ref={ref}
        onClick={onVideoClick}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      {!playing && <VideoPlayButton onVideoClick={onVideoClick} />}
    </div>
  );
};
export default Video;
