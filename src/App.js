import React, { useState } from "react";
import Video from "./components/Video";
import VideoDB from "./data/Data";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [videos, setVideos] = useState(VideoDB);

  const addVideo = () => {
    // Create a new video object with unique ID
    const newVideo = {
      id: videos.length + 1, // Generate a unique ID
      title: "New Video", // Provide default values
      views: 0,
      time: "0:00",
      channel: "Unknown",
      verified: false,
    };

    // Update the videos state with the new video
    setVideos([...videos, newVideo]);
  };

  return (
    <div className="App">
      <div>
        <button onClick={addVideo}>
          Add Video
        </button>
      </div>
      <div className="video-container">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <Video
              id={video.id}
              title={video.title}
              channel={video.channel}
              views={video.views}
              image={video.image}
              date={video.date}
              verified={video.verified}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
