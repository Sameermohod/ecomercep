import Layout from "../components/Layout"
import data from "@/utils/data"
import ProductItem from "@/components/ProductItem"
import db from "@/utils/db"
import Product from "@/models/Product"
import { useContext } from "react"
import { Store } from "@/utils/Store"
import axios from "axios";
import { toast } from "react-toastify"
const index = ({products}) => {

const {state,dispatch} = useContext(Store)
const {cart} = state;

  const addToCartHandler= async (product)=>{
    const existItem = cart.cartItems.find((x)=>x.slug===product.slug);
    const quantity = existItem?existItem.quantity+1:1;
    const { data } = await axios.get(`/api/products/${product._id}`)
    if(data.countInStock < quantity){
      toast.error("Product is out of stock")
        
    }
    dispatch({type:'CART_ADD_ITEM',payload:{...product,quantity:quantity}})
     toast.success('Product added to the cart');
}
  return (
    <div >
    <Layout title="Home page">
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4">
          {products.map((product)=>(
          <ProductItem product={product} key={product.slug} addToCartHandler={addToCartHandler} />
          ))}
      </div>
    </Layout>

    </div>
  )
}
export default index

export async function getServerSideProps(){
await db.connect();
const products=await Product.find().lean();
return{
  props:{
    products:products.map(db.convertDocToObj,),
  }
}
}