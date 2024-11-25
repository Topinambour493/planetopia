import React from 'react';
import {ProductType} from "../../types/types";
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";


export async function loader({ params } : LoaderFunctionArgs) {
  const response = await fetch("http://127.0.0.1:8000/api/products/" + params.productId + "/");
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return  await response.json()
}

export default function Product() {
  let { product } = useLoaderData() as {product: ProductType};
  return (
    <>
      <div>{product.name}</div>
      <img src={"http://localhost:8000"+product.image} width={"100px"} height={"100px"}></img>
    </>
  );
}

