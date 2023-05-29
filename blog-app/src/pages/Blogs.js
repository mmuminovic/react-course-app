import React from "react";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ border: "1px solid black" }}>
        <h3>This is my blog title</h3>
        <p>This blog is about programming</p>
        <Link
          to={"/details/1234?title='This is my blog title'"}
          state={{
            title: "This is my blog title",
            subtitle: "This blog is about programming",
          }}
        >
          Go to details
        </Link>
      </div>
    </div>
  );
}

export default Blogs;
