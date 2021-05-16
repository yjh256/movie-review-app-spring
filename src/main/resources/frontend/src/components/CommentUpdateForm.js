import react from 'react';
import './css/CommentForm.css';
import ReactStars from 'react-rating-stars-component';

const CommentUpdateForm = ({ handleSubmit = f => f, handleChange = f => f, ratingChanged=f=>f, id, author, content, rating}) => {
    return <div className="form-group">
        <form onSubmit={handleSubmit}>
            <div className="author-and-stars">
                <input className="author" name="author" type="hidden" value={author}></input>
                <ReactStars count={5} value={rating} onChange={ratingChanged} size={24} activeColor="#ffd700" />
            </div>
            <div className="content-and-submit">
                <textarea className="content" name="content" onChange={handleChange} rows="3">{content}</textarea>
                <input className="comment_submit_button" type='submit' value="수정 완료"></input>
            </div>
        </form>
    </div>
}

export default CommentUpdateForm