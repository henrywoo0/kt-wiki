import { Viewer } from "@toast-ui/react-editor";
import { useMemo } from "react";
import "./Markdown.css";

function Markdown({ text }) {
  const md = useMemo(() => {
    return String(text);
  }, [text]);

  const md2 = "### 경태는 전설이다.\n> 호호호";

  return (
    <div>
      <Viewer initialValue={md2} />
    </div>
  );
}

export default Markdown;
