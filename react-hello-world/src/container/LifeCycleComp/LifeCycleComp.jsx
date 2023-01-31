import React, { Component } from "react";



class LifeCycleComp extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');  
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps');
        return null;

    }

    componentDidMount (){
        console.log('componentDidMount');
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true;

    }


    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate');
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate')

    }

    componentWillMount(){
        console.log('componentWillUnmount')

    }

    render(){
        console.log('render')
        return(
            <div>
                <button>Component Button {this.state.count}</button>
                <h3>Test</h3> 
            </div>
        )
    }
}




export default LifeCycleComp;