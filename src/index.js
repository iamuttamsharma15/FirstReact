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

function createCard(contact){
  return <App
  key={contact.id}
   name={contact.name}
    img={contact.img}
    tel={contact.tel}
    email={contact.email}

  />
}
ReactDOM.render(
 
  <div>
  <h1 style={customStyle}>My Contacts</h1>
    
    <Avatar img="img1.jpg"/>
      
    {Contacts.map(createCard)};
      
    



  </div>
 
  ,
 
  document.getElementById('root')
);

