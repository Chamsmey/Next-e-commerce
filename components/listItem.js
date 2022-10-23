

import Product from "../pages/products/product";
// import StyleProduct from "../../styles/Product.module.css";
import Style from "../styles/Product.module.css";
export default function ListProduct({props}) {
  console.log(props);
  return (

      <div className={Style.container}>
  
      <div className={Style.list}>
        {props.map((product) => {
          return (
            <Product product= {product} key={product.id}></Product>
          );
        })}
      </div>
      </div>

  );
}






