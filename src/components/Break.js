import React, { Component } from 'react'
import '../App.css';
export class Break extends Component {
    increaseBreak=()=>{
        if(this.props.break === 60){
            return;
        }
        this.props.increase();
    }
    decreaseBreak=()=>{
        if(this.props.break === 1){
            return;
        }
        this.props.decrease();
    }
    
    render() {
        return (
            <div>
                <h2>Break Duration</h2>
                <h4>{this.props.break}</h4>
                <button disabled={this.props.isPlay ===true? "disabled" : ""} onClick={ this.increaseBreak} > + </button>
                <button disabled={this.props.isPlay ===true? "disabled" : ""} onClick={this.decreaseBreak}> - </button>
            </div>
        )
    }
}

export default Break

