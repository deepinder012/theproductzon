// import product_list_item.js
import ProductListItem from './product_list_item';

// retrive only a specific key from the props
const ProductList = (props) => {

    // declare a variable to store the result of map
    const fetchProducts = props.allproductskey.map((item) => (
        <ProductListItem key={item.id} item={item} />
    ))
    return (
        <>
            <div className='items'>
                {fetchProducts}
            </div>
            {props.children}
        </>
    )
}
export default ProductList;