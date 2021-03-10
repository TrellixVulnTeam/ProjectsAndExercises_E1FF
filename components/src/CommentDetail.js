import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a class="avatar">
                <img src="https://picsum.photos/id/237/200/300" />
            </a>
            <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">
                    {props.comment}
                </div>
                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    )
}

export default CommentDetail;