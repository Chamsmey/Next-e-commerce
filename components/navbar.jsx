import Link from "next/link";
import Style from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className={Style.header}>
      <ul className={Style.row}>
        <li className={Style.col}>
        <Link href="/">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          
          </Link>
        </li>
        <li className={Style.col}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={Style.col}>
          <Link href="/products/categories">
            <a>Products</a>
          </Link>
        </li>
        <li className={Style.col}>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
