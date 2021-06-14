import react from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    let { name } = useParams();

    return(
        <h1>I am {name}</h1>
    )
}

export default User;

