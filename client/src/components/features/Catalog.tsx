import { Product } from './../../product';
import ProductList from '../product/productList';

interface Props{
  product:Product[]; 
}

const Catalog = ({product}:Props) => {
  return (
    <> 
    <ProductList product={product}/>
    </>
  )
}

export default Catalog
