import React from "react";
import STYLE from "./simNav.module.css"


const Simple_nav=()=>{
    return( <>
        <nav className={STYLE.main}>
           <div className={STYLE.logo}>
             <p className={STYLE.image}><img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="" /></p>
  
             <h6 className={STYLE.two}>select your address</h6>
           
           {/* menu */}
           <div >
              <ul>
                  <li className={STYLE.menu}>Home</li>
                  <li className={STYLE.menu}>Services</li>
                  <li className={STYLE.menu}>Best seller</li>
                  <li className={STYLE.menu}>Mobiles</li>
                  <li className={STYLE.menu}>Electronics</li>
                  <li className={STYLE.menu}>Mobile services</li>
  
  
              </ul>
           </div>
  
           <div>
             <input type="text"  name="search" placeholder="Search here" className={STYLE.search}/>
           </div>
          
           </div>
          
        </nav>
        </>
      )
}
export default Simple_nav