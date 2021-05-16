import react from 'react';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';
import Accordion from 'react-bootstrap/accordion';
import CommentUpdateForm from './CommentUpdateForm';
import Button from 'react-bootstrap/Button';

class Comment extends react.Component {
    state = {
        content: this.props.content,
        rating: this.props.rating,
        likes: this.props.likes
    }
    submitComment() {
        const data = {
            author: this.props.author,
            content: this.state.content,
            movie_key: this.props.movie_key,
            likes: this.state.likes,
            rating: this.state.rating
        };
        axios.put('/api/v1/comments/'+this.props.id, data)
            .then(() => {
                alert('리뷰가 수정되었습니다.');
                this.props.commentsChanged();
            }, (error) => {
                alert(JSON.stringify(error));
            })
    }
    deleteComment() {
        axios.delete('/api/v1/comments/'+this.props.id)
            .then(() => {
                alert('리뷰가 삭제되었습니다.');
                this.props.commentsChanged();
            }, (error) => {
                alert(JSON.stringify(error));
            })
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
    handleDelete = (e: any) => {
        e.preventDefault();
        this.deleteComment();
    }
    render() {
        return <div className="comment-wrapper">
            {this.props.canUpdate ? (
                <Accordion className="comment">
                    <div className="comment-header">
                        <div className="comment-author">{this.props.author}</div>
                        <ReactStars count={5} value={this.props.rating} edit={false} size={24} onChange={this.props.commentChanged} activeColor="#ffd700" />
                        <div className="comment-date">{this.props.modifiedDate}</div>
                        <Accordion.Toggle className="btn btn-info" as={Button} eventKey="0">수정</Accordion.Toggle>
                        <button className="btn btn-danger update-button" onClick={this.handleDelete}>삭제</button>
                    </div>
                    <div className="comment-content">{this.props.content}</div>
                    <Accordion.Collapse eventKey="0">
                        <CommentUpdateForm {...this.props} handleSubmit={this.handleSubmit} handleChange={this.handleChange} ratingChanged={this.ratingChanged} />
                    </Accordion.Collapse>
                </Accordion>
            ) : (
                <div className="comment">
                    <div className="comment-header">
                        <div className="comment-author">{this.props.author}</div>
                        <ReactStars count={5} value={this.props.rating} edit={false} size={24} onChange={this.props.commentChanged} activeColor="#ffd700" />
                        <div className="comment-date">{this.props.modifiedDate}</div>
                    </div>
                    <div className="comment-content">{this.props.content}</div>
                </div>
            )}

        </div>
    }
}



export default Comment;