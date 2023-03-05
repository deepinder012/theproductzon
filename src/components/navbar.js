import React, { Component } from 'react';
import Product from './product';
class Navbar extends Component {

  state = {
    item: this.props.items[0],
  }
  // static getDerivedStateFromProps(props, state) {
  //     if(props.items[0] !== state.item){
  //         //Change in props
  //         return{
  //             item: props.items[0]
  //         };
  //     }
  //     return state.item; // No change to state
  // }
  selectItem(index) {
    this.setState({
      item: this.props.items[index]
    })
  }

  render() {
    return (
      <div style={{ background: `${this.props.bg_color === 'white' ? 'white' : this.props.bg_color}`, color: `${this.props.dark_mode ? 'white' : 'black'}` }}>
        <div
          className='container'
        >

          <div className='navbar'>
            {this.props.items.map((item, index) => (
              <div className='single-item-name'
                key={index}
                onClick={() => { this.selectItem(index) }}>
                {item.name}
              </div>
            )
            )
            }
          </div>
          <Product key={this.state.item.id} item={this.state.item} />
        </div>
      </div>
    )
  }
}
export default Navbar;