import { useEffect, useState } from "react";
import Style from "./Category.module.css";
import Link from "next/link";
const ListCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategory] = useState('');
  const handleFilter = async (e)=>{
      // props.submitFilter(e.target.textContent);
      // console.log(e.target.textContent);
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='fixed top-32 left-10'>
      <h1 className="text-blue-400 font-bold text-center">Categories</h1>
      <ul className='border py-2 px-4 rounded m-auto'>
        {categories.map((categoryName) => {
          return (
            <Link href={'/products/categories/' +categoryName}>
            <li key={categoryName} className='cursor-pointer hover:underline underline-offset-2 hover:text-green-400'>
             
                {categoryName}
             
            </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ListCategories;
