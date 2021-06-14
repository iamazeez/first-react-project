import react from 'react';
import {useHistory} from 'react-router-dom';

const About = () => {

    const history = useHistory();

    return(
        <>
        <h1>I am from the About</h1>
        <button onClick={() => {
            history.push("/");
            console.log(history)
        }}>Go to Home</button>
        </>
    )
}

export default About;

