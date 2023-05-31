import React from "react";
import { Link, useLocation } from "react-router-dom";

function Blogs() {
  const location = useLocation();

  console.log(location.state);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ border: "1px solid black" }}>
        <h3>This is my blog title</h3>
        <p>This blog is about programming</p>
        <Link
          to={"/details/1234"}
          state={{
            firstName: "Muhamed",
            lastName: "Muminovic",
            location: { city: "Novi Pazar", country: "Serbia" },
          }}
        >
          Go to details
        </Link>
      </div>
    </div>
  );
}

export default Blogs;
