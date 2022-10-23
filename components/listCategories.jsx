

import Style from './Category.module.css';
const ListCategories = ( props ) => {
    return (
        <div className={Style.category}>
        <h1 className={Style.sub_title}>Categories</h1>

        <ul className={Style.list_group} key={1}>
          {/* {
            props.categories.map(item=>{

            return <li key={item} onClick={handleFilter} className={Style.list_item}><a>{item}</a></li>
            })
          } */}
          <li>Man</li>
          <li>Women</li>
          <li>Jellery</li>
        </ul>
      </div>
    );
}
 
// export const getServerSideProps = async () => {

//     let categoriesFetcing = await fetch('https://fakestoreapi.com/products/categories');
//     let categories = await categoriesFetcing.json();
//     return {props: {categories}}
// }
export default ListCategories;

