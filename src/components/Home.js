import React from 'react';

const Home = () => {
    return ( 
        <div className='home-container'>
            <div className="home-text">
                <h3>Hi! My name is Richard Dalrymple</h3>
                <p>I am a student, currently enrolled at Codeclan's Glasgow campus, 
                undertaking the 16 week Software Development Course and having an absolute ball!</p>
                <p>Having worked in retail background for over ten years, I was eager for a change. </p>
            </div>
            <div className="home-image">
                <img src="images/me.jpeg" height="100" width="300"></img>
            </div>
        </div>

     );
}
 
export default Home;