import { Link } from "react-router-dom";
import "./Item.css";

function Item({ idx, title, hits }) {
  return (
    <div className="list-item">
      <Link to={`document/${idx}`}>
        <h4 className="list-item-title">{title}</h4>
        <p className="list-item-p">조회수 {hits}</p>
      </Link>
    </div>
  );
}

export default Item;
