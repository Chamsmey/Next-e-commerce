import Image from "next/image";
import style from '../styles/Cart.module.css';
const Cart = () => {
  return (
    <div className={style.container}>
      <Image
      className={style.not_found}
        src="https://datagma.com/wp-content/uploads/2022/05/loading-files.gif"
        width={600}
        height={560}
      />
    </div>
  );
};

export default Cart;
