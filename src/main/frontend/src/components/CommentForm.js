import react from 'react';
import './css/CommentForm.css';
import ReactStars from 'react-rating-stars-component';

const CommentForm = ({ handleSubmit = f => f, handleChange = f => f, ratingChanged=f=>f, author }) => {
    return <div className="form-group">
        <form onSubmit={handleSubmit}>
            <div className="author-and-stars">
                <input className="author" name="author" type="text" placeholder="로그인이 필요합니다." value={author} disabled></input>
                <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
            </div>
            <div className="content-and-submit">
                <textarea className="content" name="content" placeholder="리뷰를 입력하세요." onChange={handleChange} rows="3"></textarea>
                <input className="comment_submit_button" type='submit' value="등록"></input>
            </div>
        </form>
    </div>
}

export default CommentForm