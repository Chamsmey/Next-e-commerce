const ProductCard = ({post}) => {
    return ( 
        <div>

            <h1>{post.name}</h1>
            <h1>{post.price}</h1>
        </div>
        
     );
}
 
export default ProductCard;