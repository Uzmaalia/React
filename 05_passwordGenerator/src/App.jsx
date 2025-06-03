import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberallowed] = useState(false)
  const [charAllowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook ----> for copying password to clipboard
  const passwordRef = useRef(null)

  //password generator method
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "`~!@#$%^&*()-_=+[{]}\|;:'"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

    } ,  [length, numberAllowed, charAllowed, setPassword]) // can also give password or if wnant to remove password(but will stuck in infinite loop) can remove but keep it for memization (optimzation)
                                                            //keep in cache whatever is prsent in []


    const copyPasswordToClipBoard = useCallback(() => { //not necessary to use useCallback hook
      passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0,3);
      window.navigator.clipboard.writeText(password)
    }, [password])                                                        


    useEffect(() => {       //call back
      passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])//dependency array //keeep in [] whatever we want to run


  return (
    <div className='w-full max-w-md mx-auto shadow-lg rounded-2xl p-6 my-10 bg-gray-800 text-orange-400'>

      <h1 className='text-2xl font-bold text-white text-center mb-6'>Password Generator</h1>

    <div className='flex items-center shadow-md rounded-lg overflow-hidden mb-6'>
      <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef} // used for copy functionality
      />
      <button
        onClick={copyPasswordToClipBoard}
        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-all duration-200'>copy</button>
    </div>


    <div className='flex flex-col gap-4 text-sm'>
      <div className='flex items-center justify-between'>
        <label  htmlFor="length" className='text-white'>Length: {length}</label>
        <input 
          type="range"
          min={6}
          max={100}
          value={length}
           className='w-2/3 cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}
        />
       

      </div>


      {/* Checkbox for special numbers */}
      <div className='flex items-center justify-between'>
        <label  htmlFor="numberInput" className='text-white'>Numbers</label>
        <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
           setNumberallowed((prev) => !prev)      
          }}
          className='w-5 h-5' 
        />
      
      </div>

      {/* Checkbox for character */}
      <div className='flex items-center justify-between'>
        <label htmlFor="characterInput" className='text-white'>Characters</label>
        <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => {
            setCharallowed((prev) => !prev)
          }}
          className='w-5 h-5'
        />
       
      </div>

    </div>
      
  </div>
  )
}

export default App
