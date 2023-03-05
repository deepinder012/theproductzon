// define a functional component
// receive a single json array item as props
const ProductListItem = (props) => {
    
    return (
        <div className='item'>
            <img className='item-image' src={props.item.image} alt="product" height="300px" width="300px"/>
            <p className='name'>{props.item.name}</p>
            <p className='desc'>{props.item.desc}</p>
            <p className='price'>${props.item.price} <span className='offer'> 70% off</span></p>
        </div>
    )
}
export default ProductListItem;