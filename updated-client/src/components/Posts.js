import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/posts";
import PostItem from "./PostItem";

const Posts = ({ fetchPosts, posts, currentUser }) => {
  //The deletePost piece of state is to remove deleted items from the UI without refreshing the page
  //This state does nothing to actually delete posts
  const [deletePost, setDeletePost] = useState();
  const { id } = currentUser.user;

  useEffect(()=> {
    fetchPosts(id)
  }, [deletePost]);

  let postList = posts.map(p => {
    return <PostItem 
      key={p._id}
      title={p.title}
      post={p.post}
      postId={p._id}
      created={p.createdAt}
      setDeletePost={setDeletePost}
    />
  })

  return(
    <div>
      <h3>Your Posts</h3>
      {postList}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);