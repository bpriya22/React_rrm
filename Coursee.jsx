import React from "react";

const Coursee=(props)=>{
   if(props.CourseDetails.CourseAvail!=true)
   {
    return(
        <>
        <h1>{props.CourseDetails.CourseName}</h1>
        <h2>{props.CourseDetails.CourseDur}</h2>
        <button style={{color:"green"}}>Available</button>
        </>
    )
}
   else{
    return(
        <>
    <h1>{props.CourseDetails.CourseName}</h1>
    <h2>{props.CourseDetails.CourseDur}</h2>
        <button style={{color:"red"}}>not available</button>
        </>
    )
   }
}
export default Coursee