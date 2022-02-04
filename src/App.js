import React from "react";
import './App.css';
import ColorBlock from "./components/ColorBlock";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      color :"grey"
  }
}

upDateColor= (colorget)=>{
  this.setState({
    color:colorget
  });
};
  render(){
  return(
<>
<h1 style={{color:this.state.color}}>Hello Dear! </h1>
<div className="color-container">

    <ColorBlock color="red" onClick={this.upDateColor}/>
    <ColorBlock color="blue" onClick={this.upDateColor}/>
    <ColorBlock color="green" onClick={this.upDateColor}/>
    <ColorBlock color="orange" onClick={this.upDateColor}/>
    <ColorBlock color="indigo" onClick={this.upDateColor}/>
    <ColorBlock color="brown" onClick={this.upDateColor}/>

  </div>
</>
  );
}
}
export default App;