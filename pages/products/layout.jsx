// import ListCategories from "../components/listCategories";
import React from "react";
import ListCategories from "../../components/listCategories";
const ProductLayout = ({ children }) => {
  return (
    <div>
      {/* menu */}
      <section>
        <ListCategories></ListCategories>
     </section>

      <main>
        {children}
      </main>
    </div>
  );
};

export default ProductLayout;
