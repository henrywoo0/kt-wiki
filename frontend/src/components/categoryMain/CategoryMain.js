import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Item from "../item/Item";
import "./Category.css";

function CategoryMain() {
  const { idx } = useParams();
  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    try {
      const json = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/document/category/${idx}`
      );
      setDocuments(json.data.data);
      console.log(json.data.data);
    } catch (error) {
      console.log(error);
      toast.error("문서 리스트 불러오기에 실패했어요");
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <div className="category-main">
      {documents.map((document) => (
        <Item
          key={document.idx}
          idx={document.idx}
          title={document.title}
          hits={document.hits}
          category={1}
        />
      ))}
    </div>
  );
}

export default CategoryMain;
