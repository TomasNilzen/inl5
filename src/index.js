"use strict";

import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
    const [movies, setMovies] = useState([]);
    const [formData, setFormData] = useState({ title: "", year: "", rating: "" });
    const [editIndex, setEditIndex] = useState(null);

    const currentYear = new Date().getFullYear(); // Hämtar innevarande år
    const titleInputRef = useRef(null); // Skapar en referens för titel-fältet

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validering av betyg och år
        const year = parseInt(formData.year, 10);
        const rating = parseFloat(formData.rating);

        if (rating < 1 || rating > 5) {
            alert("Betyget måste vara mellan 1 och 5.");
            return;
        }

        if (year < 1895 || year > currentYear) {
            alert(`Året måste vara mellan 1895 och ${currentYear}.`);
            return;
        }

        if (editIndex !== null) {
            // Uppdatera filmen vid redigering
            const updatedMovies = [...movies];
            updatedMovies[editIndex] = formData;
            setMovies(updatedMovies);
            setEditIndex(null);
        } else {
            // Lägg till en ny film
            setMovies([...movies, formData]);
        }

        // Återställ formuläret
        setFormData({ title: "", year: "", rating: "" });

        // Flytta fokus tillbaka till titel-fältet
        titleInputRef.current.focus();
    };

    const handleDelete = (index) => {
        const updatedMovies = movies.filter((_, i) => i !== index);
        setMovies(updatedMovies);
    };

    const handleEdit = (index) => {
        setFormData(movies[index]);
        setEditIndex(index);

        // Flytta fokus till titel-fältet när redigeringen börjar
        titleInputRef.current.focus();
    };

    return (
        <div className="container">
            <h1>Tomas filmdatabas</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titel"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    ref={titleInputRef} // Kopplar titel-fältet till ref
                    required
                />
                <input
                    type="number"
                    placeholder="År"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    min="1895"
                    max={currentYear}
                    required
                />
                <input
                    type="number"
                    placeholder="Betyg (1-5)"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    step="0.1"
                    min="1"
                    max="5"
                    required
                />
                <button type="submit">{editIndex !== null ? "Uppdatera" : "Lägg till"}</button>
            </form>

            <ul className="movie-list">
                {movies.map((movie, index) => (
                    <li key={index} className="movie-item">
                        <span className="movie-details">
                            {movie.title} ({movie.year}) - Betyg: {movie.rating}
                        </span>
                        <div className="movie-buttons">
                            <button onClick={() => handleEdit(index)}>Redigera</button>
                            <button onClick={() => handleDelete(index)}>Radera</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
