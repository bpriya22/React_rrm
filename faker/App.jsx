import React from 'react'
import {faker} from '@faker-js/faker'
import { useState } from 'react'

const App=()=>{
  let [img,setImg]=useState(faker.image.avatar())

  let handleChange=()=>{
    setImg(faker.image.avatar())
  }

  return(
    <div>
      <img src={img} alt="" />
      <button onClick={handleChange}>change</button>
    </div>
  )
}
export default App