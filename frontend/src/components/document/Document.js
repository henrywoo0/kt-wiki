import axios from "axios";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Markdown from "../markdown/Markdown";
import "./Document.css";

function Document() {
  const { idx } = useParams();
  const [document, setDocument] = useState({});

  const getDocument = useCallback(async () => {
    try {
      const json = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/document/${idx}`
      );

      setDocument(json.data.data);
    } catch (error) {
      toast.error("문서 불러오기에 실패했습니다.");
    }
  }, [idx]);

  useEffect(() => {
    getDocument();
  }, [getDocument]);

  return (
    <div className="document">
      <h2 className="document-title">{document.title}</h2>
      <div className="document-properties">
        <p className="document-p">
          조회수{" "}
          {document.hits &&
            document.hits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          회
        </p>
        <p className="document-p">
          {moment(document.createdAt).format("YYYY년 MM월 DD일 hh:mm")} 생성됨
        </p>
        <p className="document-p">
          {moment(document.updatedAt).format("YYYY년 MM월 DD일 hh:mm")} 수정됨
        </p>
      </div>
      {document && <Markdown text={document.text} />}
    </div>
  );
}

export default Document;
