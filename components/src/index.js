import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui comments">
            <ApprovalCard><CommentDetail author="Sam" timeAgo="10:25" comment="This is my comment" /></ApprovalCard>
            <CommentDetail author="Joe" timeAgo="04:11" comment="And this is my comment" />
            <CommentDetail author="Adi" timeAgo="22:01" comment="That is ok" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));