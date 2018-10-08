import React, { Component } from 'react';

// let person7 = require('./images/person7.jpeg');

import person7 from './images/person7.jpeg';


class Counter extends Component {
    state = {  
        count:0,
        imgPerson:'https://picsum.photos/200', // getting from the server
        localImage:'./images/person8',
        altText:"UnAble to load the local image"
    }
    render() { 
        return ( 
            <React.Fragment> {/* No more Extra Div*/}
                <h1>{this.formatCount()}</h1>
                <img src={this.state.imgPerson} alt="Not Loading, Not Loading"/>
                <img src={person7} />
                <button onClick={this.onClickHandler}>Increment</button>
            </React.Fragment>);
    }

    formatCount(){
        const {count} = this.state; // Object Destructuring

        return count===0?"ZERO":count;

    }

    onClickHandler=()=>{
        const {count} = this.state;

        const newState = {...this.state};//We never mutate the state
        newState.count=10;
        this.setState(newState); 
    }
}
 
export default Counter;