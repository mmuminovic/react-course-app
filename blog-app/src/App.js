import "./App.css";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs />,
  },
  {
    // path: "/details/:id/:userId",
    path: "/details/:id",
    element: <BlogDetails />,
  },
  {
    path: "/details/edit",
    element: <div>Edit</div>,
  },
  {
    path: "/helloworld",
    element: <div>Hello world</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
