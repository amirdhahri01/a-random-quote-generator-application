import { Component } from "react";
import QuotesAuthor from "../Components/QuotesAuthor";
import QuotesText from "../Components/QuotesText";
import "./Quotes.css"
class Quotes extends Component {
  state = {
    quote: "The Best Richness, is the Richness of Soul",
    author: "Prophet Muhmmed(Peace be upon him)",
    quotesData: [],
    color: "rgb(243,156,18)",
  };
  render() {
    return (
      <div className="quote-box">
        <QuotesText quote={this.state.quote} color={this.state.color}/>
        <QuotesAuthor author={this.state.author} color={this.state.color}/>
      </div>
    );
  }
}

export default Quotes;
