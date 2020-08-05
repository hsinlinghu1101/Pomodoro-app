import React from 'react'
import '../App.css';

class Timer extends React.Component {
constructor(){
    super();
    this.state={
        isSession:true,
        timerSecond: 0,
        intervalid:0
    }
}
   
play=()=>{
  let intervalid = setInterval(this.decreaseTimer, 1000)
  this.props.onPlayStopTimer(true)
  this.setState({
      intervalid: intervalid
  })
}

decreaseTimer=()=>{
    switch(this.state.timerSecond){
        case 0: 
        if(this.props.timerMinute === 0){
            if(this.state.isSession){
                this.setState({
                    isSession: false
                });

                this.props.toggle(this.state.isSession);
            }else{
                this.setState({
                    isSession: true
                });
               this.props.toggle(this.state.isSession);

            }
        } else{
        this.props.updateTimerMinute()
         this.setState({
            timerSecond: 59
         })
        }
        break;
    default:
        this.setState((prevState) =>{
            return{
                timerSecond: prevState.timerSecond -1
            }
        })
       break;
      
        
    }
}

stop=()=>{  
   clearInterval(this.state.intervalid)
   this.props.onPlayStopTimer(false)
}

reset=()=>{   
    this.stop();
    this.props.resetSession();
    this.props.onPlayStopTimer(false)
    this.setState({
        timerSecond:0,
        isSession:true
    })
}


    render() {
        return (
            <form>
                <h2>{this.state.isSession === true ? "Session": "Break"}</h2>
                <h1>
                <span>{this.props.timerMinute}</span>
                <span> : </span>
                <span>{this.state.timerSecond === 0 ? "00" : 
                this.state.timerSecond < 10 ? '0' + this.state.timerSecond : this.state.timerSecond}</span>
                </h1>
                <button onClick={this.play}>Play</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Restart</button>
            </form>
        )
    }
}

export default Timer
