import { Component } from "react";
import QuotesAuthor from "../Components/QuotesAuthor";
import QuotesText from "../Components/QuotesText";
import "./Quotes.css";
import axios from "axios";
import Buttons from "../Components/Buttons";
class Quotes extends Component {
  state = {
    quote: "The Best Richness, is the Richness of Soul",
    author: "Prophet Muhmmed(Peace be upon him)",
    color: "rgb(243,156,18)",
  };
  randomColor = () => {
    let colorPattrens = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPattrens[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  fetchQuotes = () => {
    axios
      .get("https://quotes-api-self.vercel.app/quote")
      .then((reponse) => {
        const { quote, author } = reponse.data;
        const color = this.randomColor();
        document.body.style.color = color;
        document.body.style.backgroundColor = color;
        this.setState({
          quote: quote,
          author: author,
          color: color,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  handleClick = () => {
    this.fetchQuotes();
  };
  render() {
    return (
      <div className="quote-box">
        <QuotesText quote={this.state.quote} color={this.state.color} />
        <QuotesAuthor author={this.state.author} color={this.state.color} />
        <Buttons handleClick={this.handleClick} color={this.state.color} />
      </div>
    );
  }
}

export default Quotes;
