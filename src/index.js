import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import H1 from "./H";
const customStyle=
{
  textAlign:"center",
  color:"#aa4a30"
}
ReactDOM.render(
 
  <div>
  <h1 style={customStyle}>My Contacts</h1>
        <App 
    name="Uttam Sharma"
    img="img.jpg"
    tel="7080246071"
    email="suttam446@gmail.com"
   />
       <App 
    name="Akshay Kumar"
    img="img3.jpg"
    tel="8108546581"
    email="akshaykumarm@g.com"
   />
     />
       <App 
    name="Jack Bauer"
    img="img1.jpg"
    tel="+12453253"
    email="jackbauer@jack.com"
   />


  </div>
 
  ,
 
  document.getElementById('root')
);

