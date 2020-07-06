import React from 'react';
import './UserOutput.css';

const UserOutput =(props)=>{
  const parastyle={
    textAlign: 'center',
    color: 'green',
    fontFamily: 'Arial'
  }
  return (
    <div>
    <h1  className="UserOutput">UserName is {props.username}</h1>
    <p style={parastyle}>React Course</p>
    <p>this is first assignment</p>
   </div>
  );
}
export default UserOutput;