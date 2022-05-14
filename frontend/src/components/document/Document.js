import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "../markdown/Markdown";

function Document() {
  const { idx } = useParams();
  const [document, setDocument] = useState({});

  const getDocument = async () => {
    const json = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/document/${idx}`
    );
    setDocument(json.data.data);
  };

  useEffect(() => {
    getDocument();
  }, []);

  return (
    <div>
      <h2 className="document-title">{document.title}</h2>
      <Markdown text={document.text} />
    </div>
  );
}

export default Document;
