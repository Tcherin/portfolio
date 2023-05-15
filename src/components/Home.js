import React from 'react';
import me from '../images/me.jpeg';

const Home = () => {
    return ( 
        <div className='home-container'>
            <div className="home-text">
                <h1>The Obligatory Introduction</h1>
                <p>Hi! My name is Richard Dalrymple and I am an aspiring Software Engineer.</p> 
                <p>Currently enrolled at Codeclan's Glasgow campus, I'm undertaking the 16 week Software 
                Development Course and having an absolute ball!</p>
            </div>
            <div className="home-image">
                <img src={me} height="190" width="340"></img>
            </div>
        </div>

     );
}
 
export default Home;