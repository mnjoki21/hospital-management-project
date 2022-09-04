import React from "react";
import './Hero.css'
import doctor from "./img/doctor-2337835_1920.jpg"

function Hero(){
    return(
        <div>
            <section className="hero">
                <div className="rowcon">
                    <div className="img">
                        <img src={doctor} alt=" " />
                    </div>
                    <div className="content">
                        <span>TibaSasa</span>
                        <h2>We are concerned about your health</h2>
                        <p>Are you sick and want to be consulted quickly without delays of queueing. Reach us and book for a session with our best doctors</p>
                        <button id="enr"><a href=" " id="enrl">Book Now</a></button>
                        <button id="ex"><a href=" " id="exp">Explore</a></button>
                    </div>           
                </div>
            </section>
            <section>
                
            </section>
        </div>
    )
}

export default Hero;