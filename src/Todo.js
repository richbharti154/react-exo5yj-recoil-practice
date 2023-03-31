import React from 'react'
import {useState} from 'react'
export default function Todo(){
  const[value,setValue]=useState('')
  const[data,setData]=useState([])
  function handleClick(e){
    setValue(e.target.value)
  }
  function adddata(value){
    const data1=[...data,value]
    setData(data1)
  }
  function deletebutton(value){
   const data1=[...data] 
   setData(data1.filter((element)=>element!==value))
  }
  return(
    <div>
      {JSON.stringify(data)}
     <input onChange={handleClick} value={value}/>
     <button onClick={()=>adddata(value)}>Add</button>
     <button onClick={()=>deletebutton(value)}>Delete</button>
      </div>
  )
}