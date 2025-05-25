import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

    // always close the tag in fragmnt<> otherwise code will not work

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'uzma',
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind test</h1>
     <br />
      <Card username='chaiaurcode'/>
      <br />
      <Card username='hitesh' btnText='click me'/>


    </>
  )
}

export default App
