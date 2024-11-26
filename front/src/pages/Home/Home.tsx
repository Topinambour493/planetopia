import React from 'react';

import Presentation from "../../components/Presentation/Presentation";
import Products from "../../components/Products/Products";
import FilterProducts from "../../components/FilterProducts/FilterProducts";
import {useLoaderData} from "react-router-dom";
import {ProductType} from "../../types/types";

export default function Home() {
  let {products, q } = useLoaderData() as {products: ProductType[], q: string};

  return (
    <>
      <Presentation/>
      <FilterProducts q={q}/>
      <Products products={products}/>
    </>
  )
  ;
}
