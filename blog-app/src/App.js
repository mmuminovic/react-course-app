import "./App.css";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/details/:id" element={<BlogDetails />} />
        <Route path="/helloworld" element={<div>Hello world</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
