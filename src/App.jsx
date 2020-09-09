import React from "react";
 import Details from "./Details";

function App(props)
{
    return <div className="box">
    <div className="top-box">
    <h1 className="heading">{props.name}</h1>
    </div>
   
    <div className="inside-box">

       
       
       <img className="img-box"src={props.img} alt=""/>
        <Details
            detailInfo={props.tel}
        />
        <Details
            detailInfo={props.email}
        />
       
  


    </div>

    </div> ;
}
export default App;