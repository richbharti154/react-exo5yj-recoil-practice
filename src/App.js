import React from "react";
import {useRecoilState} from 'recoil'
import {Atom} from './Atom'


export default function App() {
  const[value,setValue]=useRecoilState(Atom)
  let color
if(value>20 && value>0){
  color='red'
}
else if(value<0){
  color='blue'
}
  function handleincre(){
    setValue(value+1)
  }
  function handledecre(){
    setValue(value-1)
  }
  return (
    <div style={{backgroundColor:color}}>
      <p>{value}</p>
    <button onClick={handleincre}>incre</button>
    <button onClick={handledecre}>decre</button>
    </div>
  );
}
