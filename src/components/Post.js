import React from "react";

const Post = ({ data }) => {
  const { id, title, body } = data;
  return (
    <div>
      <hr />
      <div className="card mb-3 m-auto" style={{ width: "18rem" }}>
        <h6>Number: {id}</h6>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
