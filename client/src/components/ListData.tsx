import { useState,useEffect } from 'react';
import { Product } from '../product';
import Catalog from './features/Catalog';
const ListData = () => { 
const [product, setState] = useState<Product[]>([]);
 useEffect(()=>{  
  fetch('https://localhost:7156/api/Product')
  .then((response) => response.json())
  .then((data) => setState(data))
 },[])
 
  const addItem=()=>{
    setState(prevState=>[...prevState,
      {
      id:prevState.length+100,
      name:'Product '+(prevState.length+1)
    }])
  }
   const ObjProp={
    name:'Add Item',
    methodName:addItem
   }

  return (
   <>
    <Catalog product={product}/>
   </> 
  )
}
export default ListData;
