
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from 'antd';
import { Spin } from 'antd';

const { Meta } = Card;


function App() {
  
  
  const [products,setProducts] = useState([])
  const [name,setName] = useState("hira")
  useEffect(()=>{
    const getData=async()=>{
      try{
      const response= await axios.get('https://fakestoreapi.com/products')
     console.log(response.data);
     setProducts(response.data)
     
    }catch(err){
      console.log(err);
      
    }
  }
  getData()
    
 },[])
 



  return (
    <>
      <div style={{display:'flex',flexWrap:"wrap",gap:'5px'}}>
     
        {products.length?  <div>
        {products.map((product,i)=>(
          <Card
          hoverable
          style={{ width: 100 }}
          cover={<img alt="example" src={product.image}/>}
         >
          <Meta title={product.title} description="www.instagram.com" />
         </Card>
               ))}   </div> :
               <h1> <Spin /></h1>
              }
      </div>
      
       
    
      <h1>{name}</h1>
      <button onClick={()=>setName("iqra")}>changename</button>
      {/* <button onClick={getData}>data</button> */}
    </>
  )
}

export default App
