import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../item/Item";
import Jumbotron from "../jumbotron/Jumbotron";
import "./Main.css";

function Main() {
  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    const json = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/document/`
    );
    setDocuments(json.data.data);
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <div className="main">
      <Jumbotron />
      {documents.map((document) => (
        <Item
          key={document.idx}
          idx={document.idx}
          title={document.title}
          hits={document.hits}
        />
      ))}
    </div>
  );
}

export default Main;
