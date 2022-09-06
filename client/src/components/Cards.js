import React from "react";
import { useState, useEffect } from "react";
import "./Cards.css"

function Cards({doctor}){
    return(
            <div className="container-fluid grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card">
                    <img src="" alt=" " />
                    <div className="bottom">
                        <h3 className="title">Malaria</h3>
                        <p className="amount"></p>
                    </div>
                </div>
            </div>
    )
        } 


export default Cards