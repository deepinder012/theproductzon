import { Component } from 'react';

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      visible: false
    }
  }

  show() {
    this.setState({
      visible: true
    })
  }
  hide() {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div onMouseOver={() => { this.show() }} onMouseOut={() => { this.hide() }} className={this.state.item.out_of_stock ? 'single-item-out' : 'single-item'}>
        <img className='item-image' src={this.state.item.image} alt="product" />
        <p className='name'>{this.state.item.name}</p>
        <p className='desc'>{this.state.item.desc}</p>
        <p className='price'>${this.state.item.price} <span className='offer'> 70% off</span></p>
        <p style={{ display: this.state.visible ? 'block' : 'none' }} className={this.state.item.out_of_stock ? 'out' : 'in'}>{this.state.item.out_of_stock ? 'Out of Stock' : 'In Stock'}</p>
      </div>
    )
  }
}

export default Product;