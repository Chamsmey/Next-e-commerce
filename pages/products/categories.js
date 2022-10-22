import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Product from "./product";
import StyleProduct from "../../styles/Product.module.css";
import Style from "../../styles/Product.module.css";
import useFetch from "./useFetch";
function ListProduct({data}) {
  const [catogeries, setCategory] = useState([]);
  // const [path,setPath] = useState('');
  // const [productFilter,setFilter] = useState([]);


  const handleFilter =  (e)=>{
    setPath('category/'+e.target.textContent);
    // console.log(path);
    getProductFilter();
  }
  useEffect(()=>{
      const getCatogeries = async()=>{
        let categoriesFetcing = await fetch('https://fakestoreapi.com/products/categories');
        let categories = await categoriesFetcing.json();
        // console.log(categories)
        setCategory(categories)
      }
      getCatogeries();
  },[]);
// const getProductFilter= async()=>{
//   let data = await fetch('https://fakestoreapi.com/products/'+path);
//   let products = await data.json();
//   setFilter(products)
// }
//   useEffect(()=>{
//     const getData = async ()=>{
//       getProductFilter()
//     }

//     getData()
// }
// ,[]);
  
  return (
    <div className={Style.container}>
      <div className={Style.category}>
        <h1 className={Style.sub_title}>Categories</h1>

        <ul className={Style.list_group}>
          {
            catogeries.map(item=>{

            return <li key={item} onClick={handleFilter} className={Style.list_item}><a>{item}</a></li>
            })
          }

        </ul>
      </div>
    <div className={Style.list}>
      {data.map((product) => {
        return (
          <Product product= {product}></Product>
        );
      })}
    </div>

    </div>
  );
}
export async function getStaticProps() {
  let products = await fetch("https://fakestoreapi.com/products");

  let data = await products.json();
  console.log(data);
  return { props: { data },revalidate:1};
}
export default ListProduct;
