import React from "react";
import ReactDOM from "react-dom";
import CommentDitail from './CommentDitail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'



const App = () => {
  return (
    <div className="ui container coments">
      <ApprovalCard>
        <CommentDitail 
        author="jim" 
        timeAgo="yesterday" 
        commentText="so so comment" 
        pic={faker.image.avatar()}/>
        </ApprovalCard>

      <ApprovalCard>
            <CommentDitail 
            author="sam" 
            timeAgo = "today" 
            commentText="nice post i like it" 
            pic={faker.image.avatar()}/>
      </ApprovalCard>
        
    </div>
  );
};

//take react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));

