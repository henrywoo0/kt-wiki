import ReactMarkdown from "react-markdown";
import "./Markdown.css";

function Markdown({ text }) {
  return (
    <div>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default Markdown;
