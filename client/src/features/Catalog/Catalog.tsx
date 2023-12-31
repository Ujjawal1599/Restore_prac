import { Product } from "../../models/Product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


export default function Catalog()
{
  const [products, setProducts] = useState<Product[]>([]);
    useEffect(() =>{
      fetch('http://localhost:5209/api/Products')
      .then(response => response.json()) 
      .then(data => setProducts(data)) 
      },[])

  
    return(
    <>
    <h1> catalog</h1>
    <ProductList products={products}/>
    
     
      </>
    )
}