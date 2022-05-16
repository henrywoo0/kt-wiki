import { Link } from "react-router-dom";
import "./Item.css";

function Item({ idx, title, hits, category }) {
  return (
    <div className="list-item">
      <Link to={`/document/${idx}`}>
        <h4 className="list-item-title">{title}</h4>
        {category || (
          <p className="list-item-p list-item-category">{category}</p>
        )}
        <p className="list-item-p">조회수 {hits}</p>
      </Link>
    </div>
  );
}

export default Item;
