import React from "react";
import { Link, useNavigate } from "react-router-dom";

// navigate through function based component
const Contact = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/employee');
    }, 2000);

    // const handleClick = () => {
    //     navigate('/employee');
    // }
    return (
        <React.Fragment>
            <h3>Contact Us</h3>
            <p>Tel: +9199999999</p>
            <p>Email: admin@gmail.com</p>
            <p>Address: Street 102</p>
            <Link to="/home">Home</Link>
            {/* <button onClick={handleClick}></button> */}
        </React.Fragment>
    )
}

export default Contact;