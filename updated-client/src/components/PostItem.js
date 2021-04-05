import React from "react";

const PostItem = ({title, post}) => {

  return (
    <div className="prompt-container">
      <h2>{title || "Title"}</h2>
      <div className="prompt">
        {post || "This is where a really cool description of the prompt would go! I would put lorem ipsum text here, but I forgot how to do that quickly using emmett. Oh well!"}
      </div>
    </div>
  )
};

export default PostItem;