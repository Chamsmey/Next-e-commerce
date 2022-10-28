// import ListCategories from "../components/listCategories";
import React from "react";
import ListCategories from "../../components/product/listCategories";
import Style from './styles/Layout.module.css';
const ProductLayout = ({ children }) => {
  return (
    <div className=''>
      {/* menu */}
      <section className={Style.menuItem}>
        <ListCategories></ListCategories>
     </section>

      <div className={Style.listItem}>
        {children}
      </div>
    </div>
  );
};

export default ProductLayout;
