import "./FilterProducts.css"

import React, {useState} from 'react';
import {Form, SubmitTarget, useSubmit} from "react-router-dom";
import Select from "react-select"



export default function FilterProducts({ q, category }: {q:string, category: string}) {
  const submit = useSubmit();
  const [selectedCategories, setSelectedCategories] = useState<string>(category || "");



  const handleCategoryChange = (selectedOptions: any) => {
    setSelectedCategories(selectedOptions.value);

    // Mettre à jour le formulaire avec les nouvelles valeurs et soumettre
    submit(
      {
        category: selectedOptions.value, // Transforme en chaîne séparée par des virgules
        q: q || "", // Inclure la recherche si présente
      },
      { method: "get", replace: true }
    );
  };

  function handleSubmit(){
    const isFirstSearch = q == null;
    console.log(document.getElementById('products-form') as SubmitTarget)
    submit(document.getElementById('products-form') as SubmitTarget, {
      replace: !isFirstSearch,
    })
  }

  const options = [
    { value: 'étoile', label: 'étoile' },
    { value: 'satellite', label: 'satellite' },
    {value: 'planète', label: 'planète'},
    {value: 'asteroïde', label: 'asteroïde'}
  ]

  return (
    <div id={"filter-products"}>
      <Form id="products-form" role="search" method={"get"}>
        <Select
          name={"category"}
          options={options}
          id="selectCategory"
          onChange={handleCategoryChange}
          defaultValue={options.find(option => option.value === category)}
        />
        <input
          id="q"
          aria-label="Search"
          placeholder="Rechercher..."
          type="search"
          name="q"
          defaultValue={q}
          onChange={handleSubmit}
        />
      </Form>
    </div>
  );
}
