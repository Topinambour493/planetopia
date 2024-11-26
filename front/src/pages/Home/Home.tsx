import React from 'react';

import Presentation from "../../components/Presentation/Presentation";
import Products from "../../components/Products/Products";
import FilterProducts from "../../components/FilterProducts/FilterProducts";
import {useLoaderData} from "react-router-dom";
import {ProductType} from "../../types/types";
import axios from "axios";


export async function loader({request}: {request: Request}){
  const url = new URL(request.url);
  console.log("url", url)
  const q = url.searchParams.get("q") || "";
  let category = url.searchParams.get("category") || "";


  const response = await axios.get("http://127.0.0.1:8000/api/products", {
    params: {
      q, category
    },
  })
  if (response.status !== 200) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  let { products }= response.data
  return  {products, q, category}
}

export default function Home() {
  const { products, q, category } = useLoaderData<{ products: ProductType[], q: string, category: string }>();

  return (
    <>
      <Presentation/>
      <FilterProducts q={q} category={category}/>
      <Products products={products}/>
    </>
  )
  ;
}
