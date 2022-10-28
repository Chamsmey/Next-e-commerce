import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../../../components/product/product";
import store from "../../../store/productStore";
import Style from '.././styles/ListProduct.module.css';

import Layout from "../layout";

// export const getStaticPaths = async ()=>{
//   let res = await fetch('https://fakestoreapi.com/products/categories');
//   let items = await res.json();
//   let paths = items.map(item=>{
//       return {params:{categoryName: item}}
//   })
//   return {
//     paths,
//     fallback:false,
//   }
// }
// export const getStaticProps = async (context) => {
//   let category = context.params.categoryName;
  
//   let product = await fetch("https://fakestoreapi.com/products/category/"+ category);

//   let data = await product.json();

//   return { props: { data } };
// };.
const ProductFilter = () => {
  const router = useRouter()
  const products = useSelector(store)
  const{productFilter, setProductFilter} = useState([]);
  const categoyName = router.query.categoryName;

  useEffect(()=>{
    const getProductFilter = async()=>{
    // const res = products.filter(product => product.categoy==categoyName);
    // setProductFilter(res);
    console.log(categoyName);
  console.log(products);
    }
    getProductFilter()
  },
  []
  )
  return (
    <Layout>
    <div className={Style.listItem}>
      {/* {
        productFilter.map(product => {
        return  <Product product={product} key={product.id}></Product>
        })
      } */}
    </div>
</Layout>
  );
};
export default ProductFilter;
