import React, { Component } from 'react';

// let person7 = require('./images/person7.jpeg');

import person from './images/person7.jpeg';


class Counter extends Component {
    state = {  
        count:0,
        imgPerson:'https://picsum.photos/200', // getting from the server
        localImage:'./images/person8',
        altText:"UnAble to load the local image"
    }

    styles = {
        marginLeft:20,
        marginRight:20
    }
    render() { 
        return ( 
            <React.Fragment> {/* No more Extra Div*/}
                <span className={this.newMethod()}>{this.formatCount()}</span>
                <img src={this.state.imgPerson} alt="Not Loading, Not Loading"/>
                <img src={person} style={this.styles}/>
                <button onClick={this.onClickHandler} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>);
    }

    newMethod() {
        let classes = "badge  m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'danger';
        return classes;
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