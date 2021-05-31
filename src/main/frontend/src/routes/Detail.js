import React from "react";
import './css/Detail.css';
import axios from 'axios';
import StarRating from '../components/StarRating';
import CommentForm from '../components/CommentForm';
import Comments from '../components/Comments';

class Detail extends React.Component {
    state = {
        content: "",
        comments: [],
        rating: 0
    }
    componentDidMount() {
        this.commentsChanged = this.commentsChanged.bind(this);
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
        this.commentsChanged();
    }
    commentsChanged() {
        axios.get('/comments/' + document.location.href.split("/movie/")[1] )
            .then(({ data }) => {
                this.setState({ comments: data });
            }, (error) => {
                console.log(error);
            })
    }
    submitComment() {
        const data = {
            author: this.props.profile.name,
            content: this.state.content,
            movie_key: document.location.href.split("/movie/")[1],
            rating: this.state.rating,
            likes: 0
        };
        if (!data.author) {
            alert('로그인이 필요합니다.');
        }
        else {
            axios.post('/api/v1/comments', data)
            .then(() => {
                alert('리뷰가 등록되었습니다.');
                this.commentsChanged();
            }, (error) => {
                alert(JSON.stringify(error));
            })
        }

    }
    handleChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    ratingChanged = (newRating) => {
        this.setState({ rating: newRating });
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.submitComment();
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const { title, pubDate, image, director, actor, userRating, link, movie_key } = location.state;
            return (
                <div className="detail">
                    <img src={image} onError={(e) => {
                        e.target.src = process.env.PUBLIC_URL + "/images/no-image-icon-0.jpg"; e.target.onError = null
                    }} alt={title} title={title} />
                    <div className="detail__data">
                        <h1 className="detail__title">{title}</h1>
                        <h5 className="detail__year">{pubDate}</h5>
                        <div className="detail__director">감독 : {director}</div>
                        <div className="detail__actor">배우 : {actor}</div>
                        <div className="detail__rating">평점 : <StarRating rating={userRating} /> {userRating}</div>
                        <p className="more-info">더 자세한 내용을 알고 싶다면 <a href={link} target="_blank">여기</a>를 클릭하세요.</p>
                    </div>
                    <h2 id="comments-head">영화 리뷰</h2>
                    <CommentForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} ratingChanged={this.ratingChanged} author={this.props.profile.name}/>
                    <Comments comments={this.state.comments} commentsChanged={this.commentsChanged} userName={this.props.profile.name}/>
                </div>
            )
        } else {
            return null;
        }
    }
}
export default Detail;