import React from "react";

const QuotesAuthor = ({ author, color }) => {
  return (
    <div className="quote-author" style={{ color: color }}>
      <span className="author">{author}</span>
    </div>
  );
};

export default QuotesAuthor;
