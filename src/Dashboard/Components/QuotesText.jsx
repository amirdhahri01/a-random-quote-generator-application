import React from "react";

const QuotesText = ({ quote, color }) => {
  return (
    <div className="quote-text" style={{ color: color }}>
      <span className="text">{quote}</span>
    </div>
  );
};

export default QuotesText;
