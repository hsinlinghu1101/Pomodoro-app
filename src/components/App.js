import React from 'react';
import '../App.css';
import Session from './Session';
import Timer from './Timer';
import Break from './Break'
class App extends React.Component{

constructor(){
  super();
  this.state={
    sessionDuration:25,
    breakDuration:5,
    timerMinute: 25,
    isPlay:false
    
  }
}


increaseSession=()=>{
  this.setState((prevState)=>{
    return {
      sessionDuration: prevState.sessionDuration +1,
      timerMinute:prevState.sessionDuration +1
    }
  })
}
decreaseSession=()=>{
  this.setState((prevState)=>{
    return {
      sessionDuration: prevState.sessionDuration -1,
      timerMinute:prevState.sessionDuration -1
    }
  })
}
increaseBreak=()=>{
  this.setState((prevState)=>{
    return {
      breakDuration: prevState.breakDuration +1,
    }
  })
}

decreaseBreak=()=>{
  this.setState((prevState)=>{
    return {
      breakDuration: prevState.breakDuration -1,
    }
  })
}

onUpdateTimeMinute=()=>{
  this.setState((prevState)=>{
    return{
      timerMinute: prevState.timerMinute -1,
      isPlay:true 
    }
    
  })
}

onToggleInterval=(isSession)=>{
  if(isSession){
    this.setState({
      timerMinute: this.state.sessionDuration
    })
  }else{
    this.setState({
      timerMinute: this.state.breakDuration
    })
  }
}

onResetSession=()=>{
  
  this.setState({
    timerMinute: this.state.sessionDuration
  })
  
}


onPlayStopTimer=(isPlay)=>{
   this.setState({
     isPlay: isPlay
   })
}



  render(){ 
    
  return (
    <div className="App">
      <header className="App-header">
        Pomodoro Timer 
      </header>
      <Session isPlay={this.state.isPlay} session={this.state.sessionDuration} increase={this.increaseSession} decrease={this.decreaseSession} />
      <Break  isPlay={this.state.isPlay} break={this.state.breakDuration} increase={this.increaseBreak} decrease={this.decreaseBreak} />
      <Timer isPlay={this.state.isPlay} timerMinute={this.state.timerMinute} breakTimer = {this.state.breakDruation} 
      updateTimerMinute={this.onUpdateTimeMinute} toggle={this.onToggleInterval} resetSession={this.onResetSession} onPlayStopTimer={this.onPlayStopTimer}/>
    </div>
  );
}
}

export default App;
