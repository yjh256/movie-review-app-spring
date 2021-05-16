import React from 'react';
import Movie from './Movie';
import './css/Movies.css';

const Movies = ({ movies }) => {
    if (movies === undefined) {
        return <div className="no_result">검색 결과가 없습니다.</div>
    }
    return <div className="movies">
        {movies.map(movie => (
            <Movie {...movie} key={movie.link.split("?code=")[1]} />))
        }
    </div>
}

export default Movies;