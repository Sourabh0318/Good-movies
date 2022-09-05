import React, { useState } from "react";
import "./styles.css";

var moviesList = {
  "sci-fi": [
    { name: "Interstellar", ratings: "4/5" },
    { name: "Stranger Things", ratings: "4.5/5" }
  ],
  adventure: [
    { name: "The Lord of the Rings", ratings: "3.5/5" },
    { name: "Harry Potter", ratings: "4.5/5" }
  ],
  action: [
    { name: "Gemini Man", ratings: "3/5" },
    { name: "Vikings", ratings: "3.5/5" }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("sci-fi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>️️📽️ Good Movies and TvShows 📽️</h1>
        <p>
          Checkout my favourite movies and TvShows. Select a Genre to get
          started
        </p>

        <div className="buttons">
          {Object.keys(moviesList).map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{ textAlign: "right", color: "#eee", fontSize: "larger" }}
            >
              {" "}
              {genre}
            </button>
          ))}
        </div>
      </div>
      <hr />
      <div className="wrapper">
        <div style={{ margin: "0 auto", textAlign: "start" }}>
          <ul>
            {moviesList[selectedGenre].map((movie) => (
              <li>
                <div style={{ fontSize: "1.5rem" }}>{movie.name}</div>
                <div style={{ fontSize: "1rem" }}>{movie.ratings}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
