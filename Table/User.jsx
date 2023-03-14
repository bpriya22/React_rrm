import React from 'react'

const User = (props) => {
    let data = props.data
  return (
    <div>
        <table border='2px' style={{textAlign:"center", fontWeight:"lighter"}}>
            <tr>
                <th>USERNAME</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>DOB</th>
                <th>PHOTO</th>
                <th>PHONE</th>
            </tr>
            {data.map((x)=>{
                return (
                <tr>
                    <td>{x.username}</td>
                    <td>{x.age}</td>
                    <td>{x.gender}</td>
                    <td>{x.dob}</td>
                    <td><img src={x.photo} alt="" style={{height:"200px", width:"200px"}} /></td>
                    <td>
                        <ol>
                            {x.phone.map((x)=>{
                                return(
                                    <li>{x}</li>
                                )
                            }
                            )}
                        </ol>
                    </td>
                </tr>)
            })}
        </table>
    </div>
  )
}

export default User