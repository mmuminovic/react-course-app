import React from "react";
import { useLocation } from "react-router-dom";

function PostDetails() {
  const location = useLocation();

  console.log(location.state);

  return <div>PostDetails</div>;
}

export default PostDetails;
