import React, { Component } from "react";
import DataComponent from './components/DataComponent';
import "./App.css";
import elephant from "./images/elephant.jpeg";

class AppClass extends Component{
render(){
  const data = DataComponent();
   
  return(
    <>
    <div className="container">
      <h2>kalvium gallary</h2>

      <div className="row">
        {data?.map((ele)=>{
          <img className="columns" key={ele.id} src="ele.img" alt="" />
        })}
      </div>
    </div>
    </>
  )
}
}
export default class App extends Component {
}
