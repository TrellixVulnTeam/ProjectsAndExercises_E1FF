import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App =()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Dorica" 
                TimeAgo="Today at 4:45PM" 
                imgUser={faker.image.abstract()} 
                comUser="Culcat!" />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Morena" 
                TimeAgo="Today at 2:00PM" 
                imgUser={faker.image.cats()} 
                comUser="Sa fie de toti banii." />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Vasilica" 
                TimeAgo="Yesterday at 1:11AM" 
                imgUser={faker.image.people()} 
                comUser="Porumbul e si el bun" />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />,document.querySelector('#root'));