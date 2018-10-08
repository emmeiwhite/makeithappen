import React, { Component } from 'react';

// let person7 = require('./images/person7.jpeg');

import person from './images/person7.jpeg';


class Counter extends Component {
    constructor(){
        super(); // calling Parent Class (Component Class) constructor
        this.state = {  
            count:0,
            imgPerson:'https://picsum.photos/200', // getting from the server
            localImage:'./images/person8',
            lists:['tag1','tag2','tag3']
        }
        console.log("Within CONSTRUCTOR",this);
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
                <button onClick={this.handleClick} className="btn btn-secondary btn-sm">Increment</button>
                {/* Rendering Lists: */}
                <h1>Rendering Lists</h1> <button onClick={this.makeListsEmpty}>{this.state.lists.length===0?"SHOW LISTS":"Here is the list"}</button>
                {this.renderTags()}

                {/* true && 'hello where is JSX' return trusy statement, the last truesy statement*/}

                {
                    this.state.count===10 && (<h2>Rendering Content Conditionally using and operator</h2>)
                }
              

               
            </React.Fragment>);
    }

    newMethod=()=> {
        let classes = "badge  m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'danger';
        return classes;
    }

    formatCount=()=>{
        const {count} = this.state; // Object Destructuring

        return count===0?"ZERO":count;

    }

    handleClick=()=>{
        // const newState = {...this.state};//We never mutate the state, Here we have copied the state
        // newState.count=10;
        // this.setState(newState); 

        this.setState({count:this.state.count+1}); // Here we are no longer mutating the state

    }

    renderTags=()=>{
        if(this.state.lists.length===0) return <h2>There are no list of tags to display !!!</h2>

        return (
            <ul className="list-group">
                {this.state.lists.map((tag,index)=><li key={index} className="list-group-item">{tag}</li>)} {/*Returning in one shot*/}
            </ul>
        )
    }

    makeListsEmpty=()=>{
        const modifiedState = {...this.state};
        modifiedState.lists = [];
        this.setState(
           modifiedState
        )
    }
}
 
export default Counter;