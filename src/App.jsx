import React from 'react';
import DataComponent from './components/DataComponent';
import "./App.css";
// import elephant from "./images/elephant.jpeg";

const App = () =>{
  const data = DataComponent();

  return(
    <>
  <div className='container'>
    <h2>kalvium gallary</h2>
    <div className='row'>
      {data?.map((ele)=>{
        return <img className='columns' key={ele.id} src={ele.img} alt="" />
      })}
    </div>
  </div>
  </>
  )
}


export default App;
