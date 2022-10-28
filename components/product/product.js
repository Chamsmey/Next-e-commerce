import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";

import Style from "./Product.module.css";
function Product({ product }) {

  return (
    <div className={Style.item}>
    
      <Image src={product.image} width={100} height={60}  alt="Product" priority/>
   
      <div className={Style.detail}>
        <h1 className={Style.title}>{product.title}</h1>
        <p >{product.price} $</p>
        <Link href={'/products/' + product.id} passHref>

        <button className={Style.btn}>See Detail</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
