import React from 'react'
import {useState} from 'react'
const data=[
  {
    name:'richa',
    
  },
  {
  name:'prachi',
  }
]
export default function Mapingdelete(){
  const [updateData,setupdateData]=useState(data)
  function handleButton(index){
   const newData= updateData.filter((element)=>element!=data[index])
    setupdateData([...newData])
  }
  return(
    <div>
   {updateData.map((element,index)=><div>
     <p>{element.name}</p>
     <button onClick={()=>handleButton(index)}>Delete</button>
   </div>)}
    </div>

  )
}