import Button from "./Button";
import "../styles/Card.css";

export function Card(props) {
  return (
    <div className="container">
      <img src={props.image} alt="" className="imgCard" />
      <span>{props.title}</span>
      <span>{props.price}</span>
      <p>{props.description}</p>
      <Button name="Button" status="success" />
    </div>
  );
}