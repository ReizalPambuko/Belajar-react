import React, { Component } from "react";
import YouTubeComp from "../component/YoutubeComp/YouTubeComp";
import "./Home.css";
import Product from "./Product/Product";

class Home extends Component{
    render(){
        return(
            <div>
                {/* <YouTubeComp time="4.12" tahun="1 tahun yang lalu"/>
                <YouTubeComp time="3.56" tahun="2 tahun yang lalu"/>
                <YouTubeComp time="6.33" tahun="3 tahun yang lalu"/>
                <YouTubeComp /> */}


<Product />
            </div>

        )
    }
}

export default Home;