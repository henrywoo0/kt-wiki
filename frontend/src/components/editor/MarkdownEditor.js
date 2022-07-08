import { Editor } from "@toast-ui/react-editor";
import { useCallback, useRef, useState } from "react";
import useInterval from "../../hooks/useInterval";
import "./MarkdownEditor.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import useNetwork from "../../hooks/useNetwork";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
import "@toast-ui/editor/dist/i18n/ko-kr";

function MarkdownEditor() {
  const { idx } = useParams();
  const [text, setText] = useState("");
  const editorRef = useRef();

  const handleNetworkChange = (online) => {
    if (!online) {
      toast.error("네트워크 상태를 확인해주세요.");
    }
  };

  const onLine = useNetwork(handleNetworkChange);

  const getDocument = async () => {
    try {
      const json = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/document/only/${idx}`
      );
      setText(json.data.data.text.replaceAll("\\n", "\n"));
      console.log(text);
    } catch (error) {
      toast.error("문서 불러오기에 실패했습니다.");
    }
  };

  const handleRegister = async () => {
    try {
      const token = sessionStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const json = await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/document`,
        {
          idx: idx,
          text: editorRef.current?.getInstance().getMarkdown(),
        }
      );
      const data = json.data.data;
      console.log(data);
      toast.success("글이 저장되었습니다.");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useInterval(() => {
    handleRegister();
  }, 5000);

  useInterval(() => {
    getDocument();
  }, 1000);

  return (
    <div className="editor">
      <Editor
        ref={editorRef}
        placeholder="기깔난 내용을 입력해주세요."
        previewStyle="vertical"
        height="600px"
        initialValue={text}
        initialEditType="markdown"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        language="ko-KR"
        useCommandShortcut={false}
      ></Editor>
    </div>
  );
}

export default MarkdownEditor;
