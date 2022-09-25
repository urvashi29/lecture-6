import React, { Component } from "react";

class Home extends Component {

    // this.props are coming directly from Route


    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <h3>Welcome to Home Website.</h3>
                {setTimeout(() => {
                    window.open('/contact');
                    {/* v5 or below of react-router-dom */ }
                    {/* this.props.history.push('/contact'); */ }
                }, 2000)}
            </React.Fragment>
        )
    }
}

export default Home;
