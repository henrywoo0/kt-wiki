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
    setDocuments(json.data.documents);
  };

  useEffect(() => {});

  return (
    <div className="main">
      <Jumbotron />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default Main;
