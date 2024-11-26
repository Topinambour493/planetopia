import React from 'react';
import {ProductType} from "../../types/types";
import {NavLink, useLoaderData, useNavigation} from "react-router-dom";
import "./products.css"


export default function Products({products}: {products: ProductType[]}) {
  const navigation = useNavigation();

  console.log({products})

  return (
    <div id={"products"} className={"flex-container"}>
      <h2>Produits</h2>
      <ul>
        {products && products.length > 0 ? (
          products.map((product: ProductType) => {
            return (
              <li key={product.id}>
                <NavLink to={"/products/" + product.id}>
                  <img src={"http://localhost:8000" + product.image} className={"image-products"}/>
                </NavLink>
              </li>
            )
          })
        ) : (
          <li>Aucun produit disponible</li>
        )}
      </ul>
    </div>
  )
    ;
}

