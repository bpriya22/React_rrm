import React from "react";
import STYLE from "./Netflix.module.css"
const Netflix=()=>{
return(
    <nav className={STYLE.nav_bar}>
    <ul>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7BJsQbZlcPA-54Dt9cgD_u0NAVgviPcNOTqRuHdKRQ&s" alt="" /></li>
      <li><a href="">Home</a></li>
      <li><a href="">TV Shows</a></li>
      <li><a href="">Movies</a></li>
       <li><a href="">Latest</a></li>
       <li><a href="">My List</a></li>
       <>
       <div className={STYLE.search}>
        <input type="text" name="search" id={STYLE.search} placeholder="Search for Products, Brands and more.. "/>
       </div></>

      </ul>
  </nav>

)
}
export default Netflix