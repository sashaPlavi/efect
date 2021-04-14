import React, {useState} from 'react'

 

function State() {
  // when useState pass a function, it ran inly on initial render 
const [state, setState] = useState(()=>{
  return {
    count:0,
    theme: "blue"
  }
})
const count = state.count
const theme = state.theme
const decremetCount = () =>{
  setState( prevstate => {
    return (  { ...prevstate,count: prevstate.count -1})
  })
}

const incrementCount = () =>{
 // setCount(prevcount => prevcount + 1 )
 setState( prevstate => {
  return (  { ...prevstate,count: prevstate.count +1})
})
}

  return (
    < >
    <button onClick={decremetCount}>-</button> <br></br>
    <span>{count}</span>
    <br></br>
    <span>{theme}</span>
    <br></br>
    <button onClick = {incrementCount}>+</button>
   
     
     <h3>heloooo</h3>
    </ >
  );
}

export default State;
