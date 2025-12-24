import { useDispatch, useSelector } from "react-redux";
import {removeFilm,rechercheFilm,addFilm,} from "../features/counter/counterSlice"; // Vérifiez le chemin
import "./FilmCard.css";
import { useState } from "react";

const FilmCard = () => {
  const films = useSelector((state) => state.film.films || []); 
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [inputdesc, setInputDesc] = useState("");
  const [inputrate, setInputRate] = useState("");
  const [inputurl, setInputUrl] = useState("");

  return (
    <div className="film-container">
      <nav className="navbar">
        <h1 className="navbar-title">Film Library</h1>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search films..."
            onChange={(e) => dispatch(rechercheFilm(e.target.value))} //
          />
        </div>
      </nav>
      <div className="add-film">
        <h2>Add New Film</h2>
        <input
          type="text"
          placeholder="Title"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Director"
          value={inputdesc}
          onChange={(e) => setInputDesc(e.target.value)}
            required
        />
        <input
          type="text"
          placeholder="Rate"
          value={inputrate}
          onChange={(e) => setInputRate(e.target.value)}
            required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={inputurl}
          onChange={(e) => setInputUrl(e.target.value)}
            required
        />
        <button
          onClick={() => {
            dispatch(
              addFilm({
                id: films.length + 1,
                title: inputValue,
                director: inputdesc,
                rate: inputrate,
                url: inputurl,
              })
            );
            setInputValue("");
            setInputDesc("");
            setInputRate("");
            setInputUrl("");
          }}
        >
          Add Film
        </button>
      </div>
      <div className="film-card">
        <h2>Film List</h2>
        <ul>
          {films.map((film) => (
            <li key={film.id} className="film-item">
              <img src={film.url} alt={film.title} className="film-image" />
              <h3>{film.title}</h3>
              <p>Director: {film.director}</p>
              <p>Rate: {film.rate} ⭐</p>
              <button onClick={() => dispatch(removeFilm(film.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilmCard;
