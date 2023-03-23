import React from "react";
import { getProduct } from "../services/api"
import { useLoaderData } from "react-router-dom"
import "../styles/Details.css"
import Header from "./Header";

export async function loaderProducts({ params }) {
    const product = await getProduct(params.id);
    return { product };
}

export function Details() {
    const { product } = useLoaderData();
    return (
      <div className="details">
        <Header />
        <div className="images">
        {product.images.map((image, key) => {
            return <img src={image} alt="" className="imgCard" key={key}/>;
        })}
        </div>
        <div className="texts">
        <p>{product.title}</p>
        <p>R$ {(product.price).toFixed(2)}</p>
        <p>{product.description}</p>
        </div>
      </div>
    );
  }