import Button from "./Button";
import "../styles/Card.css";

export function Card(props) {
  return (
    <div className="container">
      <img src={props.image} alt="" className="imgCard" />
      <span>{props.title}</span>
      <span>R$ {(props.price).toFixed(2)}</span>
      <p>{props.description}</p>
      <Button name="Ir para produto" status="info" />
    </div>
  );
}