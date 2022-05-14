import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../item/Item";
import Jumbotron from "../jumbotron/Jumbotron";
import Markdown from "../markdown/Markdown";
import "./Main.css";

function Main() {
  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    const json = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/document/`
    );
    setDocuments(json.data.documents);
  };

  const markdown =
    "# 이재향 선생님의 `경변` 선언\n## `사건사고`인가?\n**굵게** *기울이기*\n> 인용문 또는 그냥 `글`이죠";

  return (
    <div className="main">
      <Jumbotron />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Markdown text={markdown} />
    </div>
  );
}

export default Main;
