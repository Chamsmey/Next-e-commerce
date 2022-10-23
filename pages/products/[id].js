import Product from "./product";
import Style from "../../styles/Detail.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout from "./layout";
export const getServerSideProps = async (context) => {
  let id = context.params.id;
  let product = await fetch("https://fakestoreapi.com/products/" + id);

  let data = await product.json();

  return { props: { product: data } };
};
const Detail = ({ product }) => {
  return (
    <Layout>
      <div className={Style.card}>
        <Link href={'/products'}><button>Back</button></Link>
        <div className={Style.item}>
          <Image src={product.image} width={180} height={190} alt={product} />
          <div className={Style.detail}>
            <h1 className={Style.title}>{product.title}</h1>
            <p>{product.description}</p>
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
