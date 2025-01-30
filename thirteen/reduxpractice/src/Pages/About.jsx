import React from 'react'
import { useGetAllProductsQuery } from '../store/reducers/rtk-query'

function About() {
  const {data,error,isLoading} = useGetAllProductsQuery()
  console.log(data);
  console.log(error,"error")
  console.log(isLoading,"loader")
  
  return (
    <div>
      <h1>products</h1>
      {isLoading &&<h1>loading</h1>}
      <ul>{data && data.map((elem,key)=>(
<li key={key}>{elem.title}</li>
      ))}</ul>
    </div>
  )
}

export default About