import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={arr:[]};
    this.valueArray=[];
    this.press = this.press.bind(this);
    this.count=0;
    
  }
  press(){
    let input=document.getElementById("inputText");
    let inputValue=input.value;
    this.valueArray.push(inputValue);
    this.setState({arr:this.valueArray});
    console.log(this.state.arr);  
  }

  deleteHandler=(e)=>{
    e.target.parentNode.classList.add("delete");
    let items=document.querySelectorAll("#items");
    for(let j=0;j<items.length;j++) 
    {
      if(items[j].className=="delete") 
      {
        this.valueArray.splice(j,1);
        items[j].classList.remove("delete");
        break;
      }   
    }
      this.setState({arr:this.valueArray});
      console.log(this.state.arr);
  }

  sortHandler=()=>{
    this.valueArray.sort();
    this.setState({arr:this.valueArray});
  }  
  
  render(){
    return<div>
      <input id="inputText" type="text"/>
      <button id="buttonClick" onClick={this.press}>Add</button>
  <div id="list">{this.state.arr.map(item=><p><input type="checkbox"/>
  <span onDoubleClick={this.onDbClickHandler} id="items">{item}<button onClick={this.deleteHandler}>Delete</button></span></p>)}</div>
  <button onClick={this.sortHandler}>Sort</button>
    </div>
  }
}


export default App;
