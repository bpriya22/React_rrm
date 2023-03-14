import React from 'react'
// import './components_Nav/global.css';
// import Blog from './class_based_component/Blog';
// import Nav from './components_Nav/Nav';
// import Simple_nav from './Dedicated_css/Simple_nav';
// import Flip from './Dedicated_css/Flip';
// import Netflix from './Dedicated_css/Netflix';
//  import Nav from './Props/function_based/Nav';
// import Nav2 from './Props/function_based/Nav2';
// import Nav3 from './Props/function_based/Nav3';
// import Blog1 from './Props/class_based/Blog1';
// import photo from "./kate-winslet.jpg"
// import Json from "./cards_fe/userdata.json"
// import Course from './cards_fe/Course';
// import "./cards_fe/global.css"
import Coursee from './Coursee';


const App=()=>{
    return(
       <>
       {/* <Nav/> */}
        {/* <Blog/> */}
        {/* <Simple_nav/> */}
        {/* <Flip/> */}
        {/* <Netflix/> */}
        {/* <Nav  data="Priya"/>
        <Nav2  data="Im twenty too"/>
        <Nav3  data="I'm Priyanka"/> */}
        {/* <Blog1 data="hii" username="heyy" /> */}
        {/* <Nav data={photo}/>
        <img src="{photo}" alt="" /> */}
        {/* <div>
            <Course  payload={Json}/>
        </div>
          */}
          <Coursee CourseDetails={{CourseName:"JAVA FULL STACK",CourseAvail:true,CourseDur:"6 months"}}  />

        </>
    )
}
export default App