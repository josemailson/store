import React from "react";
import { getProduct } from "../services/api"
import { useLoaderData } from "react-router-dom"

export async function loaderProducts({ params }) {
    const product = await getProduct(params.id);
    return { product };
}

export function ProductItem() {
    const { product } = useLoaderData();
    return (
      <div>
      <div className="product-item">
        <div className="avatar">
            <img src={product.images[0]} alt=""/>
        </div>
        <div className="texts">
        <span className="title">{product.title}</span>
        <span className="price">R$ {(product.price).toFixed(2)}</span>
        </div>
      </div>
      </div>
    );
  }