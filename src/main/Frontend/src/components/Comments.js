import react from 'react';
import Comment from './Comment';
import axios from 'axios';
import './css/Comments.css';

const Comments = ({ comments, commentsChanged, userName }) => {
    return <div className="comments">
        { comments.length > 0 ? (
            <div className="comments_exists">
                {comments.map(comment => {
                    if (userName == comment.author) {
                        return <Comment {...comment} key={comment.id} commentsChanged={commentsChanged} canUpdate={true}/>
                    }
                    else {
                        return <Comment {...comment} key={comment.id} commentsChanged={commentsChanged} canUpdate={false}/>
                    }
                })}
            </div>
        ) : (

            <div className="no-comments">해당 영화에 대한 리뷰가 없습니다.</div>
        )}
    </div>
}

export default Comments;