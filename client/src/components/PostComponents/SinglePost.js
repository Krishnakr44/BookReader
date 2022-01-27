import React, { useEffect } from "react";

const SinglePost = ({ post }) => {
  useEffect(() => {
    console.log("hello");
    console.log(post);
  });
  return (
    <div>
      <div className="post">
        <h2>{post.title}</h2>
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
      </div>
    </div>
  );
};

export default SinglePost;
