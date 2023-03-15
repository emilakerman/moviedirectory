import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'

import MovieCard from './MovieCard';

// 88b6035a api key

const API_URL = 'http://www.omdbapi.com?apikey=88b6035a';

const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Superman');
    }, []);

    return (
        <div className='app'>
            <h1>Movie Database</h1>

            <div className="search">
                <input
                    placeholder='Search for movies here'
                    value='Superman'
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <div>
                <div className='container'>
                    <MovieCard movie1={movies[0]}/>
                </div>
            </div>
        </div>

    );
}

export default App;