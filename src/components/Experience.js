import React from 'react';
import python from "../images/python.png";
import flask from "../images/flask.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";



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
                    <img src={python} height="125" width="125"></img>
                    <p>Python</p>
                </div>
                <div className="experience-flask">
                    <img src={flask} height="125" width="125"></img>
                    <p>Flask</p>
                </div>
                <div className="experience-html">
                    <img src={html} height="125" width="125"></img>
                    <p>HTML</p>
                </div>
                <div className="experience-css">
                    <img src={css} height="125" width="125"></img>
                    <p>CSS</p>
                </div>
                <div className="experience-javascript">
                    <img src={javascript} height="125" width="125"></img>
                    <p>JavaScript</p>
                </div>
                <div className="experience-react">
                    <img src={react} height="125" width="125"></img>
                    <p>React</p>
                </div>
            </div>
        </div>
     );
 }
  
 export default Experience;