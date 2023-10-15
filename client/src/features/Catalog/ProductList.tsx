import { Grid } from "@mui/material";
import { Product } from "../../models/Product";
import ProductCard from "./ProductCard";

interface Props{
    products:Product[]
}
export default function ProductList({products}:Props){
    return(
    
<Grid container spacing={4}>

      {products.map(products =>(
        <Grid key={products.id} item xs={3}>
         <ProductCard products ={products}/>
      </Grid>
    ))}
    </Grid>
    )
}