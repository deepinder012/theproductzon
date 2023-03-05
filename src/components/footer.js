// import React and Component
import React, { Component } from 'react';

// class based component definition
class Footer extends Component {

    // constructor definition
    // pass props as arguments
    constructor(props) {
        // call the super class constructor and pass the props
        super(props)

        // set the state in constructor or in any member functions
        this.state = {
            value: 1
        }
    }




    render() {

        console.log(this.state.value);

        return (
            <footer>
                {/* receiveing props through this.props object */}
                {this.props.footerText}
            </footer>
        )
    }
}

// export he component
export default Footer;