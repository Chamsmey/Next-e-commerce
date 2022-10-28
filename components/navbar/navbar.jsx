import Link from "next/link";
import Style from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className={Style.header}>
      <ul className={Style.row}>
        <li className={Style.col}>
        <Link href="/" className="font-bold text-blue-400 font-poppin">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          
          </Link>
        </li>
        <li className={Style.col}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={Style.col}>
          <Link href="/products">
            Products
          </Link>
        </li>
        <li className={Style.col}>
          <Link href="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
