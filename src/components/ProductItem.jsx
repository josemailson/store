import React from "react";
import "../styles/ProductItem.css";
import Button from "./Button";

export function ProductItem(props) {
    let list = props.itens;
    
    return (
      <div>
        {list.map((element)=>{
          return(
            <div className="product-item" key={element.id}>
              <div className="item-container">
                <div className="avatar">
                  <img src={element.image} width="50px" alt=""/>
                </div>
                <div>
                  <p>Produto: {element.title}</p>
                  <p>Preço: R$ {(element.price * element.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div className="buttons">
                <div className="quantity">
                  <Button name="-" idProduct={element.id} action="menos"></Button>
                  <p>{element.quantity}</p>
                  <Button name="+" idProduct={element.id} action="mais"></Button>
                </div>
                <Button name="Remover Produto" status="danger" idProduct={element.id} action="remover"></Button>
              </div>
            </div>
          )
        })}
  
      </div>
    );
  }