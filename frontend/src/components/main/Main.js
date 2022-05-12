import Item from "../item/Item";
import Jumbotron from "../jumbotron/Jumbotron";
import "./Main.css";

function Main() {
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
