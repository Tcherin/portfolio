import React from 'react';
import p from '../images/python.png';
import logo from './logo512.png';




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
                    <img src={p} height="125" width="125"></img>
                    <p>Python</p>
                </div>
                <div className="experience-flask">
                    <img src={logo} height="125" width="125"></img>
                    <p>Flask</p>
                </div>
                <div className="experience-html">
                    <img src="./images/python.png" height="125" width="125"></img>
                    <p>HTML</p>
                </div>
                <div className="experience-css">
                    <img src="/images/css.png" height="125" width="125"></img>
                    <p>CSS</p>
                </div>
                <div className="experience-javascript">
                    <img src="/images/javascript.png" height="125" width="125"></img>
                    <p>JavaScript</p>
                </div>
                <div className="experience-react">
                    <img src="/images/react.png" height="125" width="125"></img>
                    <p>React</p>
                </div>
            </div>
        </div>
     );
 }
  
 export default Experience;