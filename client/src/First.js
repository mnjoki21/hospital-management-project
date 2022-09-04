import React from "react";
import './First.css'
import Hero from "./Hero";
import ambulance from './img/pexels-pavel-danilyuk-6754163.jpg'


function First(){
    return(
        <div>
            <section className="desc">
                <div className="descc">
                    <img src={ambulance} alt=" " />
                    <p className="feel">Need the best service <br /> anywhere anytime</p>
                </div>
            </section>
            <Hero />
        </div>
    )
}

export default First;