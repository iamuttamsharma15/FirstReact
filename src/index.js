import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Contacts from "./Contacts";
import Avatar from "./Avatar";
const customStyle=
{
  textAlign:"center",
  color:"#aa4a30"
}
ReactDOM.render(
 
  <div>
  <h1 style={customStyle}>My Contacts</h1>
    
    <Avatar img="img1.jpg"/>
    <App 
    name={Contacts[0].name}
    img={Contacts[0].img}
    tel={Contacts[0].tel}
    email={Contacts[0].email}
   />
    <App 
    name={Contacts[1].name}
    img={Contacts[1].img}
    tel={Contacts[1].tel}
    email={Contacts[1].email}
   />
     
    <App 
    name={Contacts[2].name}
    img={Contacts[2].img}
    tel={Contacts[2].tel}
    email={Contacts[2].email}
   />


  </div>
 
  ,
 
  document.getElementById('root')
);

