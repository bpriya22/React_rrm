import React, { Component } from 'react'
import JSON from "./Table/users.json"
import User from './Table/User';


export default class App extends Component {
    constructor(){
        super()
        this.state={
            json: JSON
        }
    }
  render() {
    console.log(JSON);  //we can do this.. but to follow the hyrarchy we store them in `state`.
    return (
       <div>
        <User data={this.state.json}/>
       </div>
    )
  }
}
