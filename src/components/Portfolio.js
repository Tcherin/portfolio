import React from 'react';
import soloProject from '../images/solo_project.png'
import pokedex from '../images/pokedex.png'



const Portfolio = () => {
    return ( 
        <div className="portfolio-container">
            <div className="portfolio-text">
            <h1>Portfolio</h1>
            <p>Since starting Codeclan, my cohort and I have already completed several small-scale projects. Some have developed
                from homework and lab exercises in class, while others have been started as a solo project in their own right.</p>
            </div>
            <div className="portfolio-content">
            <a href="https://github.com/Tcherin/Week_5-Solo_Project" target="_blank">
                <img src={soloProject} width="600" height="500"></img>
            </a>
            <p>My first project, 'The Good ol' Fashioned VHS Depository', was the culmination of all that I had learned over
                the first segment of my course, primarily Python, Flask, and SQL. For character, I took a generic shopkeeping
                 brief and made it a video shop, with an employee who provides terrible summaries for each film.</p>
            <a href="https://github.com/Tcherin/Week_7-Wknd-Homework" target="_blank">
                <img src={pokedex} width="600" height="500"></img>
            </a>
                <p>My second project, 'Build your own Pokedex', grew out of a weekend homework, which required us to draw information from an API to be 
                    displayed within a React app. As well as providing me with some much needed familiarity with drilling down into
                    an API's often unintuitive design, it also gave me another chance to develop my front-end skills.</p>
            </div>
        </div>

     );
}
 
export default Portfolio;