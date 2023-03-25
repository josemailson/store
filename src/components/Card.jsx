import Button from "./Button";
import "../styles/Card.css";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <div className="container">
      <img src={props.image} alt="" className="imgCard" />
      <span>{props.title}</span>
      <span>R$ {(props.price).toFixed(2)}</span>
      <p>{props.description}</p>
      <Link to={`${props.id}`}>
        <Button name="Ir para produto" status="info" />
      </Link>
      <Button name="Adicionar ao carrinho" status="success" />
    </div>
  );
}