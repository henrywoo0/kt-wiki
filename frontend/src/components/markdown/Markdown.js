import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useMemo, useState } from "react";
import "./Markdown.css";

function Markdown({ text }) {
  // useEffect(() => {
  //   console.log(text);
  // }, [text]);

  // const testmd = useMemo(() => {
  //   return text;
  // }, [text]);

  return (
    <div>
      <Viewer initialValue={text} />
    </div>
  );
}

export default Markdown;
