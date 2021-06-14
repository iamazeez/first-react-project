import react from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav style={{width:100 + "vw",height:80,backgroundColor:'lightblue'}}>
            <ul style={{display:'inline-block'}}>
                <li style={{display:'inline-block'}}>
                    <Link to="/">Home </Link>
                </li>
                <li style={{display:'inline-block'}}>
                    <Link to="/about">About </Link>
                </li>
                <li style={{display:'inline-block'}}>
                    <Link to="/contact">Contact </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

