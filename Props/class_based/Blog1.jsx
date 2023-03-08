import React, {Component} from 'react';
class Blog1 extends Component{
    render(){
        console.log(this);
        return(
            <>
            <h1>{this.props.data}</h1>
            <div>{this.props.username}</div>
            </>
        )
    }
}
export default Blog1
