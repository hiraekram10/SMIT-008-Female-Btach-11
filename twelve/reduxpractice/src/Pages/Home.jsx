import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Home = () => {
    const state = useSelector((state)=>state.bank)
    const dispatch= useDispatch()
    const cashaDep=()=>{
        dispatch({
            type:"deposite",
            payload :20000
        })
    }
    
    const [count, setCount] = useState(0)
  return (
    <div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={cashaDep}>
          count is {state.balance}
        </button>
      
      </div>
    </div>
  )
}

export default Home
