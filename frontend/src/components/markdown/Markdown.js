import { Viewer } from "@toast-ui/react-editor";
import "./Markdown.css";

function Markdown({ text }) {
  return (
    <div>
      <Viewer initialValue={text} />
    </div>
  );
}

export default Markdown;
