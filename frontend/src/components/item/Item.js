import "./Item.css";

function Item({ title, hits }) {
  return (
    <div className="list-item">
      <h4 className="list-item-title">{title}</h4>
      <p className="list-item-p">조회수 {hits}</p>
    </div>
  );
}

export default Item;
