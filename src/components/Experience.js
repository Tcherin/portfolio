import React from 'react';




 const Experience = () => {
    return ( 
        <div className="experience-container">
            <div className="experience-text">
                <h1>Experience</h1>
                <p>At just over the halfway point in my Codeclan studies, 
                    I've learned a number of powerful programming technologies, including:</p>
            </div>
            <div className="experience-content">
                <div className="experience-python">
                    <img src="./portfolio/images/python.png"></img>
                    <p>Python</p>
                </div>
                <div className="experience-flask">
                    <img src="./portfolio/images/flask.png" height="125" width="125"></img>
                    <p>Flask</p>
                </div>
                <div className="experience-html">
                    <img src="./portfolio/images/html.png" height="125" width="125"></img>
                    <p>HTML</p>
                </div>
                <div className="experience-css">
                    <img src="./portfolio/images/css.png" height="125" width="125"></img>
                    <p>CSS</p>
                </div>
                <div className="experience-javascript">
                    <img src="./portfolio//images/javascript.png" height="125" width="125"></img>
                    <p>JavaScript</p>
                </div>
                <div className="experience-react">
                    <img src="./portfolio/images/react.png" height="125" width="125"></img>
                    <p>React</p>
                </div>
            </div>
        </div>
     );
 }
  
 export default Experience;