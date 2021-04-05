import React from "react";
import moment from "moment";

const PostItem = ({title, post, created}) => {

  return (
    <div className="prompt-container">
      <h2>{title || "Title"}</h2>
      <div className="prompt">
        {post || "This is where a really cool description of the prompt would go! I would put lorem ipsum text here, but I forgot how to do that quickly using emmett. Oh well!"}
      </div>
      <div className="prompt-author">
        Created <span className="colon">:</span> {moment(created).format("MMMM Do YYYY")}
      </div>
    </div>
  )
};

export default PostItem;