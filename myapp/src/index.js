import React from "react";
import ReactDOM from "react-dom";
import CommentDitail from './CommentDitail';



const App = () => {
  return (
    <div className="ui container coments">
        <CommentDitail />
    </div>
  );
};

//take react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));

