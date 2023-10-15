import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../models/Product";
import { Link } from "react-router-dom";
interface Props{
    products:Product
}
export default function ProductCard({products}:Props)
{
    return(
      <Card >
        <CardHeader
        avatar = {<Avatar>
          {products.name.charAt(0).toUpperCase()}

        </Avatar>}
        title = {products.name}
        titleTypographyProps ={{
          sx:{fontWeight:'bold', color:'primary.main'} //any css property
          }}
        />
      <CardMedia
        sx={{height:140 , backgroundSize: 'contain' , bgcolor:'primary.light'}}
        image ={ products.pictureUrl}
        title={products.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color='secondary'>
          $ {(products.price/100).toFixed(2)}
          </Typography>
          <Typography gutterBottom variant="h5" color='secondary'>
            {products.brand} / {products.price}
            </Typography>
            </CardContent>
      <CardActions>
      <Button size="small">Add to Cart</Button>
      <Button component={Link} to={`/catalog/${products.id}`} size="small">View</Button>
      </CardActions>
    </Card>
    )
}