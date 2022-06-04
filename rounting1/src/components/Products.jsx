import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect ( () => {
    const fetchProducts = async () => {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json();
      setProducts(d);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      Products:{" "}
    <div>
      {products.map((p) => (
        <div key={p.id}>{p.id}. {p.name}   Price:{p.price}</div>
      ))}
    </div>
    </div>

  )
}

export default Products;