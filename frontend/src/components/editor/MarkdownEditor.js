import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import useInterval from "../../hooks/UseInterval";

function MarkdownEditor() {
  const editorRef = useRef();
  const handleRegister = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };

  useInterval(() => {
    console.log("test");
  }, 2000);

  return (
    <div>
      <Editor
        ref={editorRef}
        placeholder="기깔난 내용을 입력해주세요."
        previewStyle="vertical"
        height="300px"
        initialEditType="wysiwyg"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        useCommandShortcut={false}
      ></Editor>
    </div>
  );
}

export default MarkdownEditor;
