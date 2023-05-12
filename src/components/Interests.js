import React from 'react';



const Interests = () => {
    return ( 
            <div className="interests-container">
                <div className="interests-title">
                <h1>Interests</h1>
                <p>The pace of learning at Codeclan doesn't leave a lot of time for 
                    anything besides coding, writing about code, studying code, dreaming in code ...</p>
                <p>But! When I do get a spare minute, you can usually find me doing one of the following:</p>
                </div>
                <div className="interests-content">
                <img src='images/musical-theatre.jpg' width="500" height="400"></img>
                <p>I enjoy performing with many of Glasgow's
                    amateur theatre companies. Discovering this lively scene gave me much more
                    confidence after moving to Glasgow to study. Whether its singing, dancing
                    or acting, I'm always keen to get stuck in!</p>

                <img src="images/art.jpg" width="400" height="300"></img>
                <p>Over my first four years in Glasgow, I studied an honours degree
                    in Contemporary Art Practice. I still love to draw and paint and have found
                    great enjoyment in putting similar principles into designing the front-ends of my coding projects.</p>

                <img src="images/art.jpg" width="500" height="400"></img>
                <p>I have written several books over the last few years, both in literary and genre fiction.
                    I began after finishing my honours degree, teaching me to focus on long-term goals without
                    any need for supervision or encouragement.</p>
                </div>
            </div>

     );
}
 
export default Interests;