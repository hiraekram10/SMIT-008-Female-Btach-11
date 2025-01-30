import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from '../store/reducers/counterSlice'
import { useGetAllProductsQuery } from '../store/reducers/rtk-query'
import { Link } from 'react-router-dom'
const Home = () => {
    const state = useSelector((state)=>state.counter)
    console.log(state);
    
    const dispatch= useDispatch()
    const cashaDep=()=>{
        dispatch({
            type:"deposite",
            payload :20000
        })
    }
    const {data,error,isLoading} = useGetAllProductsQuery()
    console.log(data);
    console.log(error,"error")
    console.log(isLoading,"loader")
    
    const [count, setCount] = useState(0)
  return (
    <div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={cashaDep}>
          count is {state.balance}
        </button>
        <h1>{state.count}</h1>
        <button onClick={()=>(dispatch(increment()))}>increment</button>
     <button onClick={()=>(dispatch(decrement()))}>decrement</button>
      </div>
      <ul>{data && data.map((elem,key)=>(
<li key={key}>{elem.title}</li>
      ))}</ul>
      <Link to={"/about"}>go to about</Link>
    </div>
  )
}

export default Home
