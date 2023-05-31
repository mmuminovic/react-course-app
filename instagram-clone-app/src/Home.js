import logo from "./logo.svg";
import "./App.css";
import mydata from "./data.json";
import Post from "./components/Post";
import { useState } from "react";

function Home() {
  const myUsername = "mmuminovic";
  const [data, setData] = useState(mydata);

  const likeHandler = (postId) => {
    const newData = data.map((item, index) => {
      if (item.id === postId) {
        let likes = item.likes;
        if (likes.includes(myUsername)) {
          likes = likes.filter((u) => u !== myUsername);
        } else {
          likes.push(myUsername);
        }
        item.likes = likes;
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div className="App">
      <div className="posts">
        {data.map((post) => (
          <Post
            key={post.id}
            post={post}
            likeHandler={likeHandler}
            myUsername={myUsername}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
