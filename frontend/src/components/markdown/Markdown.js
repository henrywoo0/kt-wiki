import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Markdown.css";

function Markdown({ text }) {
  return (
    <div>
      <ReactMarkdown children={text} className="react-markdown" />
    </div>
  );
}

export default Markdown;
