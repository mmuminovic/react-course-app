import React from "react";
import {
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";

function BlogDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log(location.state);

  const goToAllBlogs = () => {
    navigate("/", { state: { test: "Hello world" } });
  };

  console.log("id =", params.id);
  console.log("title =", searchParams.get("postId"));
  //   console.log("userId =", params.userId);

  return (
    <div>
      {/* <h1>{navState.title}</h1>
      <h3>{navState.subtitle}</h3> */}
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <button onClick={goToAllBlogs}>Go back to all blogs</button>
    </div>
  );
}

export default BlogDetails;
