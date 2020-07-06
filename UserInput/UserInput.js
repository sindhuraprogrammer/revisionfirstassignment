import React from 'react';

const UserInput =(props)=>{
  return <input style={{ backgroundColor: '#3CBC8D', color: 'white'}} type="text" onChange={props.change} value={props.username}/>
}
export default UserInput;