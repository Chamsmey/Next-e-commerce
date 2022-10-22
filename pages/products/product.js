import Image from "next/image";
import Link from "next/link";

import Style from "../../styles/Product.module.css";
function Product({ product }) {
  return (
    <div className={Style.item}>
      <Image src={product.image} width={120} height={100} />
      <div className={Style.detail}>
        <h1 className={Style.title}>{product.title}</h1>
        <p >{product.price} $</p>
        <Link href={'/products/' + product.id}>

        <button className={Style.btn}>See Detail</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
