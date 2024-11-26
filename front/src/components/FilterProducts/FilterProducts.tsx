import "./FilterProducts.css"

import React from 'react';
import {Form, useSubmit} from "react-router-dom";

export default function FilterProducts({ q }: {q:string}) {
  const submit = useSubmit();

  return (
    <div id={"filter-products"}>
      <Form id="search-form" role="search" method={"get"}>
        <input
          id="q"
          aria-label="Search"
          placeholder="Rechercher..."
          type="search"
          name="q"
          defaultValue={q}
          onChange={(event) => {
            const isFirstSearch = q == null;
            submit(event.currentTarget.form, {
              replace: !isFirstSearch,
            })
          }}
        />
        <div
          className="sr-only"
          aria-live="polite"
        ></div>
      </Form>
    </div>
  );
}
