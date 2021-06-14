import react from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
    let {pathname} = useLocation();
    return(
        <h1>Sorry {pathname} not found. </h1>
    )
}

export default NotFound;

