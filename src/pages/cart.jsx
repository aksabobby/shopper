import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cart = () => {
    const [cart,setCart]=useState([])
    let [count,setCount]=useState(0)
    const navigator=useNavigate()
    useEffect(()=>{
        const data=[];
        const keys=Object.keys(localStorage);
        for(let i=0;i<keys.length;i++)
        {
            data.push(JSON.parse(localStorage.getItem(keys[i])))

        }
        setCart(data)

    },[count])


    const removeProduct=(key)=>{
    localStorage.removeItem(key)
    setCount(count=count+1)

}
const buy=()=>{
    localStorage.clear()
    navigator('/')
}
  return (
    <>
     <div className='container'>
        <div className="row">
            {
                cart.map((ct,index)=>(<div className='col-lg-12 d-flex justify-content-between align-items-center border my-3'>
                    <div className="start1">
                        <div className='st d-flex'>
                            <img src={ct.thumbnail} style={{height:"200px"}} alt="" />
                            <div className='as fst-italic'>
                                <h2>{ct.title}</h2>
                                <h3>Price :{ct.price}</h3>
                            </div>
                            </div>
                            </div>
                            <div className='start2'>
                                <button className='btn btn-warning my-2' onClick={()=>{removeProduct(ct.id)}}>remove</button>
                            </div>
                </div>))
            }
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        {cart.length!=0?<button className="btn btn-primary" onClick={buy}>BUY</button>:<p>ADD PRODUCTS</p>}
    </div>
    </div>
   
  

    </>
  )
}

export default cart