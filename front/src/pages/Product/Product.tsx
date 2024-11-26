import React from 'react';
import {ProductType} from "../../types/types";
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import "./Product.css"
import axios from "axios";

export async function loader({ params } : LoaderFunctionArgs) {
  const response = await axios.get("http://127.0.0.1:8000/api/products/" + params.productId + "/");
  console.log("response",response)
  if (response.status !== 200) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return  response.data
}

export default function Product() {
  let { product } = useLoaderData() as {product: ProductType};
  return (
    <div id={"product"} className={"flex-container"}>
      <div className={"name"}> {product.name}</div>
      <div className={"container-product"}>
        <div className={"left"}>
          <img src={"http://localhost:8000" + product.image} className={"image"}></img>
        </div>
        <div className={"right flex-container"}>
          <div className={"category"}> {product.category}</div>
          <div className={"description"}>{product.description}</div>
          <div className={"price"}>{product.price} €</div>
        </div>
      </div>
    </div>
  );
}

