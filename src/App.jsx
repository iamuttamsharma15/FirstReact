import React from "react";
function App(props)
{
    return <div className="box">
    <div className="top-box">
    <h1 className="heading">{props.name}</h1>
    </div>
   
    <div class="inside-box">

       
       
       <img className="img-box"src={props.img}/>
 
       <p className="info">{props.tel}</p>
       <p className="info">{props.email}</p>
  


    </div>

    </div> ;
}
export default App;