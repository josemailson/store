import React from "react";
import "../styles/ProductItem.css";
import Button from "./Button";

export function ProductItem(props) {
    let list = props.itens;
    console.log(list);
    
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
                  <p>Preço: R$ {(element.price).toFixed(2)}</p>
                </div>
              </div>
              <div className="buttons">
                <div className="quantity">
                  <button type="button">-</button>
                  <p>{element.quantity}</p>
                  <button type="button">+</button>
                </div>
                <Button name="Remover Produto" status="danger" idProduct={element.id} action="remover"></Button>
              </div>
            </div>
          )
        })}
  
      </div>
    );
  }