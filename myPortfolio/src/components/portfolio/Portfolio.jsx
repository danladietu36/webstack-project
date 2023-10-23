import "./portfolio.css";

import React from "react";

//Portfolio function
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div id="project" class="project">
            <div class="title">
                <h1 class="space">Projects</h1>
            </div>

            <div class="box">
                <div class="card">
                    <a href="https://github.com/danladietu36/simple_shell" class="github">
                        Printf and Shell Project
                    </a>
                    <div class="pra">
                        <p> A simplified, but personal version of printf
                            function and unix shell written in C with minimal
                            library usage.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <a href="https://github.com/danladietu36/AirBnB_clone_v2" class="github">
                        AirBnB Search Page
                    </a>
                    <div class="pra">
                        <p> An Airbnb clone search page that imitates
                            filtering and database management of a rental
                            system.
                            Custom console was made to test functionalities.
                            Custom console was
                            made to test functionalities
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )}
    
    export default Portfolio;
