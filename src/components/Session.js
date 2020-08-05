import React, { Component } from 'react'
import '../App.css';
class Session extends Component {

    increaseSession=()=>{
        if(this.props.session === 60){
            return;
        }
        this.props.increase();
    }
    decreaseSession=()=>{
        if(this.props.session === 1){
            return;
        }
        this.props.decrease();
    }
     
    
    render() {
        return (
            <div>
                <h2>Session Duration</h2>
                <h4>{this.props.session}</h4>
                <button disabled={this.props.isPlay===true? "disabled" : ""} onClick={this.increaseSession}> + </button>
                <button disabled={this.props.isPlay===true? "disabled" : ""} onClick={this.decreaseSession}> - </button>
            </div>
        )
    }
}

export default Session
