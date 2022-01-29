import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Image, Button } from "react-bootstrap";
import "./PostComponents.css";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ posts, heading }) => {
  return (
    <>
      <div>
        <h1 className=" text-center mt-3">{heading}</h1>
        <div>
          {posts.map((post) => (
            <div className="singlepost" key={post._id}>
              <LinkContainer to={`/post/${post._id}`}>
                <h2 className="links text-center mt-3">
                  <u>{post.title}</u>
                </h2>
              </LinkContainer>
              <div className="d-flex">
                <div style={{ width: "30%", marginLeft: "1em" }}>
                  {post.imageUri != undefined ? (
                    <Image fluid src={post.imageUri} style={{}} />
                  ) : null}
                </div>
                <div style={{ marginLeft: "2em" }}>
                  <p>
                    Posted on {post.createdAt.slice(0, 10)} at
                    {` ` + post.createdAt.split("T")[1].split(".")[0]}
                  </p>
                  <p>Description: {post.desc}</p>
                  <p>Book Title: {post.bookTitle}</p>
                  <p>Book Author: {post.author}</p>
                  Genres:
                  {post.genArr.map((gen) => {
                    return (
                      <Button className="mx-3 my-2" variant="success">
                        {gen.text}
                      </Button>
                    );
                  })}
                  <p>Interested Book/ Genre: {post.interest}</p>
                </div>
                <div className="ms-auto me-5 chat">
                  <FontAwesomeIcon
                    icon={faCommentAlt}
                    style={{ marginRight: "0.5em" }}
                  />
                  Chat
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
