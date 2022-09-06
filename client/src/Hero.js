import React from "react";
import First from "./First";
import { useState, useEffect } from "react";
import './Hero.css'
import daktari from "../src/img/doctor-2337835_1920.jpg"

function Hero(){
    const[doctor, setDoctor] = useState([])
  
    useEffect(()=>{
      fetch('http://localhost:5002/doctors')
      .then(res=>res.json())
      .then(data=>setDoctor(data))
    },[]);
    return(
        <div>
            <section className="ambulance">
                <First />
            </section>
            <section className="hero">
                <div className="rowcon">
                    <div className="img">
                        <img src={daktari} alt=" " />
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
        </div>
    )
}

export default Hero;