import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useState } from "react";
import "./Markdown.css";

function Markdown({ text }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(text);
  }, [text]);

  return (
    <div>
      <Viewer initialValue={markdown} />
    </div>
  );
}

export default Markdown;
