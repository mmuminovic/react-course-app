import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

axios.defaults.baseURL = "https://js-course-server.onrender.com";

axios.defaults.headers.common.Authorization = `Bearer UDHWiuadhiuahwuiduiwahd`;

axios.interceptors.response.use((response) => {
  if (response.status === 401) {
    // odjavi me
  }
});

class App extends React.Component {
  state = {
    author: "",
    text: "",
    likes: null,
  };

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote() {
    axios
      .get("/quotes/get-random-quote")
      .then((res) => {
        const data = res.data;
        /*
        data = {
            "quoteId": "63dfc2b46a91670035c4ec6a",
            "quoteText": "one day or day one ",
            "quoteAuthor": "DZ",
            "quoteSource": "--",
            "likes": 6
        }
        */
        this.setState({
          text: data.quoteText,
          author: data.quoteAuthor,
          likes: data.likes,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="quote-wrapper">
          <div className="quote-card">
            <h3>Author: {this.state.author}</h3>
            <p className="quote-text">{this.state.text}</p>
            <p>Likes: {this.state.likes}</p>
          </div>
          <button
            onClick={() => {
              this.getRandomQuote();
            }}
          >
            Get random quote
          </button>
        </div>
      </div>
    );
  }
}

export default App;
