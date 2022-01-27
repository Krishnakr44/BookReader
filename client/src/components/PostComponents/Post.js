import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
const Post = ({ posts }) => {
  useEffect(() => {
    console.log(posts);
  });
  return (
    <>
      <div>
        <h1 className=" text-center mt-3">Posts</h1>
        <div>
          {posts.map((post) => (
            <div className="my-4 mx-auto" key={post._id}>
              <LinkContainer to={`/post/${post._id}`}>
                <h2 className="text-primary links">{post.title}</h2>
              </LinkContainer>
              <p>
                Posted on {post.createdAt.slice(0, 10)} at
                {` ` + post.createdAt.split("T")[1].split(".")[0]}
              </p>
              <br />
              <p>Post Desc: {post.desc}</p>
              <br />
              <p>Book Title: {post.bookTitle}</p>
              <br />
              <p>Book Author: {post.author}</p>
              Genres:
              {post.genArr.map((gen) => {
                return <p>{gen.text}</p>;
              })}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
