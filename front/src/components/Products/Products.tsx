import React from 'react';
import {ProductType} from "../../types/types";
import {NavLink, useLoaderData, useNavigation} from "react-router-dom";

export async function loader() {
  const response = await fetch("http://127.0.0.1:8000/api/products/");
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return await response.json()
}


export default function Products() {
  let {products} = useLoaderData() as {products: ProductType[]};
  const navigation = useNavigation();

  console.log(products)
  return (
    <>
      <div>Products</div>
      <ul>
        {products && products.length > 0 ? (
          products.map((product: ProductType)=>{
            return (
              <li key={product.id}>
                <NavLink to={"/products/"+product.id}>
                  {product.name}
                  <img src={"http://localhost:8000" + product.image} width={"100px"} height={"100px"}/>
                </NavLink>
              </li>
            )
          })
        ) : (
          <li>Aucun produit disponible</li>
        )}
      </ul>
    </>
  )
  ;
}
