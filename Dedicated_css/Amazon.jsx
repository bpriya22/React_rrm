import React from "react";
import STYLE from "./Dedicated_css/Amazon.module.css"
const Amazon=()=>{
    return(
        <>
        <header>
        <nav className={STYLE.nav_bar}>
          <ul>
            {/* <!-- <li><img src="" 
              alt="flp"></li> -->
               */}
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">ContactUs</a></li>
             <li><a href="">Services</a></li>
             <div class="search">
              <input type="text" name="search" id={STYLE.search} placeholder="Search for Products, Brands and more.. ">
             </div>
            </ul>
        </nav>
    </header>
    </>
    )
}
export default Amazon