import react from 'react';
import './css/StarRating.css';

const StarRating = ({ rating }) => {
    const percentage = rating * 10 + "%";
    return <div className="star-ratings-css" style={{"--percentage": percentage}}></div>
}

export default StarRating;