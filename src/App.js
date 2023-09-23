import React from "react";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar
      className="btn btn-danger"
      />
      <Video
        title="React tutorial from Mohammed Saleem"
        channel="Coding with Harry"
        views="10000"
        image="https://picsum.photos/200/300"
        date="1 month ago"
      />
      <Video
        title="React tutorial from Mohammed Saleem"
        channel="Coding with Harry"
        views="1M"
        image="https://hips.hearstapps.com/hmg-prod/images/701/mia-khalifa-answers-googled-sex-questions-3-1509453482.jpg?resize=1200:*"
        date="1 year ago"
      />
      <Video
        title="React tutorial from Mohammed Saleem"
        views="1M"
        image="https://hips.hearstapps.com/hmg-prod/images/701/mia-khalifa-answers-googled-sex-questions-3-1509453482.jpg?resize=1200:*"
        date="1 year ago"
      />
    </div>
  );
}

export default App;
