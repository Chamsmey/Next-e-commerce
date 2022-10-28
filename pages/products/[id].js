import Product from "../../components/product/product";
import Style from "./styles/Detail.module.css";
import Link from "next/link";
import Image from "next/image";

import {useRouter } from "next/router";
import Layout from "./layout";
export const getStaticPaths = async ()=>{
  let data = await fetch('https://fakestoreapi.com/products/');
  let products = await data.json();
  let paths = products.map(product=>{
      return {params:{id: product.id.toString()}}
  })
  return {
    paths,
    fallback:false,
  }

}
export const getStaticProps = async (context) => {
  let id = context.params.id;
  
  let product = await fetch("https://fakestoreapi.com/products/" + id);

  let data = await product.json();

  return { props: { product: data } };
};
const Detail = ({ product }) => {
  const route = useRouter()
  
  return (
   
    <Layout>
      <div className={Style.card}>
     <button  onClick={()=>route.back()}>Back</button>
        <div className={Style.item}>
          <Image src={product.image} width={180} height={10} alt={product} />
          <div className={Style.detail}>
            <h1 className={Style.title}>{product.title}</h1>
            <p className={Style.description}>{product.description}</p>
            <p className={Style.price}>{product.price} $</p>
            <Link href={"/products/" + product.id}>
              <button className={Style.btn}>Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
