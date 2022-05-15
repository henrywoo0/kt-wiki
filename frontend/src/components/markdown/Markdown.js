import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Markdown.css";

function Markdown({ text }) {
  const md = "### 상빈\n하하\n> 호호\n\n헤헤";

  useEffect(() => {
    console.log(text);
    console.log(typeof text);
  }, [text]);

  return (
    <div>
      <ReactMarkdown children={text + " " + md} />
    </div>
  );
}

export default Markdown;
