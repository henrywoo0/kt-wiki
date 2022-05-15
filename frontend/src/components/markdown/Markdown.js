import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Markdown.css";

function Markdown({ text }) {
  useEffect(() => {
    console.log(text);
    console.log(typeof text);
  }, [text]);

  return (
    <div>
      <ReactMarkdown children={text} />
    </div>
  );
}

export default Markdown;
