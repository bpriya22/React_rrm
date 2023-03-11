import React from "react";

const Course=(props)=>{
    console.log(props);
    return(
        <div className="parentblock">
           <div className="mainblock">
             <img src={props.payload[0].trainerphoto} alt="" />
           </div>
           </div>
    )
}
export default Course