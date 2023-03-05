// import react
import React, { Component } from 'react';
// import REactDOM
import ReactDOM from 'react-dom/client';
import Header from './components/header';
// importing styles
import "./styles/mystyles.css";
// import json
import JSON from './allproducts.json'
// import footer
import Footer from './components/footer';
import Navbar from './components/navbar';
class App extends Component {

    // initialize state with json data
    state = {
        bg_color: 'linear-gradient(90deg, rgba(255,252,220,1) 0%, rgba(255,255,255,1) 100%)', // for header
        active: false, //for header
        active_search: false,
        dark_mode: false,
        allproducts: JSON,
        all_filtered_products: [],
        matches: true,
        footerText: 'This is Footer Text'
    }

    // define a functions to be passed to the header using props
    // receive the event & display events data
    // for header.js
    getKeyword = (event) => {
        
        var keywords = event.target.value;

        if(keywords === ''){
            this.setState({
                matches: false
            })
        }
        var filtered_products = this.state.allproducts.filter((product) => {
            return product.name.toLowerCase().indexOf(keywords) > -1
        })

        if(filtered_products.length > 0){
            this.setState({
                matches: true
            })
        }
        else{
            this.setState({
                matches: false
            })
        }
        this.setState({
            all_filtered_products: filtered_products
        })
    }
    change_search = () => {
        this.setState({
            active_search: this.state.active_search ? false : true
        })
    }

    // member function for button click
    choose_bg_color = () => {
        // toggle the active state
        this.setState({
            active: this.state.active ? false : true
        })
    }
    change_bg_color = (bg_color) => {
        this.setState({
            bg_color: bg_color
        })
    }
    change_mode = () => {
        this.setState({
            dark_mode: this.state.dark_mode ? false : true,
            bg_color: this.state.dark_mode === false ? 'linear-gradient(90deg, rgba(97,97,97,1) 0%, rgba(14,13,13,1) 100%, rgba(199,214,217,1) 100%)' : 'linear-gradient(90deg, rgba(255,252,220,1) 0%, rgba(255,255,255,1) 100%)'
        })
    }
    render() {
        return (
            <>
                {/* pass the change_bg_color() to header using propos */}
                {/* pass the active state to header using propos */}
                <Header
                    matches={this.state.matches}
                    keywords={this.getKeyword}
                    active={this.state.active}
                    dark_mode={this.state.dark_mode}
                    bg_color={this.state.bg_color}
                    choose_bg_color={this.choose_bg_color}
                    change_bg_color={this.change_bg_color}
                    change_mode={this.change_mode}
                    active_search={this.state.active_search}
                    change_search={this.change_search}
                />
                <Navbar dark_mode={this.state.dark_mode} bg_color={this.state.bg_color} 
                items={this.state.all_filtered_products.length === 0 ? this.state.allproducts : this.state.all_filtered_products} />
                {/* <ProductList allproductskey={this.state.allproducts}>
                    <hr />
                    <h1>I am child component</h1>
                </ProductList> */}
                {/* <Footer footerText={this.state.footerText}/> */}
            </>
        )
    }
}

// create a root object for the index.html's div root
const root = ReactDOM.createRoot(document.getElementById("root"));
// render the functional component App on the root object
root.render(<App />); 