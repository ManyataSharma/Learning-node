import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
let foodItems = ["dal","green veggies","pulses","roti","salad"];
  return (
/** <>
  <div><h1>Healthy Food </h1></div>
 <ul class="list-group">
  <li class="list-group-item">dal</li>
  <li class="list-group-item">green veggies</li>
  <li class="list-group-item">pulses</li>
  <li class="list-group-item">roti</li>
  <li class="list-group-item">salad</li>
</ul> 
    </> 
    **/

    // MAP METHOD 
    <>
    <h1>Healthy Foods</h1>
    <ul class="list-group">
      {foodItems.map((item) => (<li class="list-group-item">{item}</li>))}
    </ul>
    </>
  )
}

export default App
