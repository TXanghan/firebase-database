import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deletePost, fetchPost } from "../feature/post/Postslice";

function View_post({handleEdit}) {
  const { posts, error, loading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  if(loading){
    return <div>Loading....</div>
  }
  if(error){
    return<div>{error}</div>
  }
  

  return (
    <>
     <div className="row mt-3 justify-content-center">
  {posts.map((post) => (
    <div key={post.id} className="col-sm-6 col-md-4 col-lg-2 my-3">
      <div className="card shadow-sm h-100">
        {/* Image placeholder (uncomment if needed) */}
        {/* <img src="https://via.placeholder.com/150" className="card-img-top" alt="Post image" /> */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.discription}</p>
          <div className="mt-auto">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(deletePost(post.id))}
            >
              Delete
            </button>
            <button
              className="btn btn-primary btn-sm ms-2"
              onClick={() => handleEdit(post)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default View_post;
