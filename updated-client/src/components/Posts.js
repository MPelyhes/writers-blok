import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/posts";
import PostItem from "./PostItem";

const Posts = ({ fetchPosts, posts, currentUser }) => {
  const { id } = currentUser.user;
  console.log(id)
  useEffect(()=> {
    fetchPosts(id)
  }, []);
  
  console.log(posts)

  let postList = posts.map(p => {
    return <PostItem 
      key={p._id}
      title={p.title}
      post={p.post}
      created={p.createdAt}
    />
  })

  return(
    <div>
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