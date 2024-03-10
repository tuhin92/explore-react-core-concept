import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ToDo task="Learn React"></ToDo>
      <ToDo task="Exolore core concepts"></ToDo>
      {/* <Device></Device>
      <Device></Device>
      <Device></Device>
      <Person></Person>
      <Student grade="7" score="90"></Student>
      <Student></Student> */}
    </>
  )
}

function Device(){
  return <h2>This is device: </h2>
}


function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'jack', age: 12} 
  return <h3>I'm {person.name} with age {age + money}</h3>
}

function  Student({grade=0, score=0}){
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}



export default App
