import Layout from "../components/Layout"
import data from "@/utils/data"
import Product from "@/components/Product"
const index = () => {
  return (
    <div >
    <Layout title="Home page">
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4">
          {data.products.map((product)=>(
          <Product product={product} key={product.slug}/>
          ))}
      </div>
    </Layout>

    </div>
  )
}
export default index