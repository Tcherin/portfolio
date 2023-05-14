import React from 'react';



const Interests = () => {
    return ( 
            <div className="interests-container">
                <div className="interests-title">
                <h1>Interests</h1>
                <p>The pace of learning at Codeclan doesn't leave a lot of time for 
                    anything besides coding, but when I do get a spare minute, 
                    this is what you'll find me doing!</p>
                </div>
                <div className="interests-content">
                <img src='images/musical-theatre.jpg' width="450" height="350"></img>
                <p>I enjoy performing with many of Glasgow's
                    amateur theatre companies. Discovering this lively scene gave me much more
                    confidence after moving to Glasgow to study. Whether its singing, dancing
                    or acting, I'm always keen to get stuck in!</p>

                <img src="images/art.jpg" width="450" height="350"></img>
                <p>Over my first four years in Glasgow, I studied an honours degree
                    in Contemporary Art Practice. I still love to draw and paint and get a lot of enjoyment
                    putting that impulse into practice designing the front-ends of my coding projects.</p>

                <img src="images/writing.jpg" width="450" height="350"></img>
                <p>I have written several novels over the last few years, both in literary and genre fiction.
                    After completing my honours degree, these projects taught me a self-directed focus for long-term goals 
                    that has served me ever since.</p>
                </div>
            </div>

     );
}
 
export default Interests;