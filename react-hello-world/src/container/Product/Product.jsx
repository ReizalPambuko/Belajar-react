import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
    state = {
        order: 3,
    }

handlePlus = () => {
  this.setState({
    order: this.state.order + 1
  })
}

handleMinus(){
  this.setState({
    order: this.state.order - 1 
  })
}

    render(){
        return(
        <div className="card">
            <div className="header-logo">
                <h5>R_RESTAURANT</h5>
            <div className="count">{this.state.order}</div>
            </div>
            <div className="img-thumb">
                <img src="https://asset.kompas.com/crops/nsueiJRoh-BTF94-Y71Nv0f3Zj0=/3x0:700x465/780x390/data/photo/2020/12/30/5fec5602f116e.jpg" alt="" />
            </div>
            <p className="product-title">grilled chicken</p>
            <p className="product-price">35.000</p>
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order}/>
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
        </div>

        )
    }
}

export default Product;