import { Product } from '../../product';
import { Grid,Typography,Button,CardActions ,CardContent,CardMedia,Card, Avatar,CardHeader} from '@mui/material';
import { mainModule } from 'process';
interface Props{
  product:Product; 
}
export default function ProductCard({product}:Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader avatar={<Avatar sx={{bgcolor:'secondary.main'}}>
        {product.name.charAt(0).toUpperCase()}
      </Avatar>}
       title={product.name}
       titleTypographyProps={{  sx:{color:'primary.light',fontWeight:'bold'}}}
      />
      <CardMedia
      sx={{height:140,backgroundSize:'contain',bgcolor:'primary.light'}}
        component="img"
        alt={product.name}
        height={140}
        image="/pro_images/Product1.jpg"
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          ${product.stockQty}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brandName}/{product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
