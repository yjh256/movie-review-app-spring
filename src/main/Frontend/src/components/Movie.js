import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./css/Movie.css";
import StarRating from './StarRating';

const Movie = (props) => {
    const editTitle = (title) => {
        return title
            .replace("</b>", "")
            .replace("<b>", "")
            .replace("&amp;", "&");
    };
    const editDirector = (director) => {
        const directors = director.split("|");
        if (directors.length <= 1) return "알 수 없음";
        return directors[0];
    }
    const editActor = (actor) => {
        const actors = actor.split("|");
        actors.splice(Math.min(actors.length - 1, 4));
        if (actors.length == 0) {
            return "알 수 없음" 
        }
        return actors.join(", ");
    }
    const movie_key = props.link.split("?code=")[1];
    return (
        <Link to={{
            pathname: `/movie/${movie_key}`,
            state: {...props, movie_key, title: editTitle(props.title), director: editDirector(props.director), actor: editActor(props.actor)}
        }} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="movie">
                <img src={props.image} onError={(e) => {
                    e.target.src =  process.env.PUBLIC_URL + "/images/no-image-icon-0.jpg"; e.target.onError = null}} alt={props.title} title={props.title} />
                <div className="movie__data">
                    <h3 className="movie__title">{editTitle(props.title)}</h3>
                    <h5 className="movie__year">{props.pubDate}</h5>
                    <div className="movie__directors">감독 : {editDirector(props.director)}</div>
                    <div className="movie__actors">배우 : {editActor(props.actor)}</div>
                    <div className="movie__rating">평점 : <StarRating rating={props.userRating}></StarRating> {props.userRating}</div>
                </div>
            </div>
        </Link>
    );
}

export default Movie;