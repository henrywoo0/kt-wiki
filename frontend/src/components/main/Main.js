import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import toast from "../../lib/toast";
import Item from "../item/Item";
import Jumbotron from "../jumbotron/Jumbotron";
import "./Main.css";

function Main() {
  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    try {
      const json = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/document`
      );
      setDocuments(json.data.data);
    } catch (error) {
      console.log(error);
      toast.error("문서 리스트 불러오기에 실패했어요");
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <div className="main">
      <Jumbotron />
      {documents &&
        documents.map((document) => (
          <Item
            key={document.idx}
            idx={document.idx}
            title={document.title}
            hits={document.hits}
            category={document.category.name}
          />
        ))}
    </div>
  );
}

export default Main;
