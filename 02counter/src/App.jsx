import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // console.log('clicked', counter);f
    // counter = counter + 1
    setCounter(counter + 1) //updating counter value
    //  uzmaCounter(counter + 1) //updating counter value
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>

      <br /> <br />

      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
