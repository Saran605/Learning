import { useState,useEffect } from "react";

import Categories from './homepage/Categories';
import Billboard_items from "./Billboard_items";


const videobgUrl = "https://www.azero.in/videos/background4.mp4"

const HeroSection = ()=>{
    return(
        <div className="hero-section">
            <div>
                <video autoPlay loop muted className="bg-video">
                    <source src={videobgUrl} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}




export const Body = ()=>{
    return(
        <div className="home-section-body">
            <HeroSection/>
            <div className="home-section-body-a">
                <Categories/>
                <div>
                    <h1>Featured Billboards</h1>
                    <Billboard_items/>
                </div>
                
            </div>
            
        </div>
    )
}