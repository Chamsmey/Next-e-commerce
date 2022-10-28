import Layout from "./layout";
import Product from "../../components/product/product";
import Style from "./styles/ListProduct.module.css";
import ListCategories from "../../components/product/listCategories";
import { useEffect, useState } from "react";
import { productActions } from "../../store/productStore";
import { useDispatch } from "react-redux";
// export async function getStaticProps() {
//   let products = await fetch("https://fakestoreapi.com/products");

//   let data = await products.json();
//   return { props: {data},revalidate:1};
// }
export default function ProductPage() {
  let dispatch = useDispatch();
  let [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let products = await fetch("https://fakestoreapi.com/products");

      let data = await products.json();
      dispatch(productActions.getProduct(data));
      console.log(data);
      setProducts(data);
    };
    getProducts();
    // handler('');
  }, []);
  // const handler = (filterValue) => {
  //   if (filterValue != '') {productFilter
  //     console.log(filterValue);
  //     const dataFilter = products.filter(
  //       (product) => product.category == filterValue
  //     );
  //     setProductFilter(dataFilter);
  //   } else {
  //     setProductFilter(products);
  //   }
  // };
  return (
    <Layout>
        <div className='w-1/2 m-auto bg-gray-200 flex flex-wrap justify-between'>
          {products.map((product) => {
            return (
              <Product product={product} key={product.id}>
                {" "}
              </Product>
            );
          })}
        
      </div>
    </Layout>
  );
}
