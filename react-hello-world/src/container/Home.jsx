import React, { Component } from "react";
import YouTubeComp from "../component/YoutubeComp/YouTubeComp";
import "./Home.css";
import Product from "./Product/Product";
import LifeCycleComp from "./LifeCycleComp/LifeCycleComp";

class Home extends Component{
    render(){
        return(
            <div>
                <p>lifeCycleComp</p>
                <hr />
                <LifeCycleComp />
            </div>
        )
    }
}

export default Home;