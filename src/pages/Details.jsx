import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
  const navigator=useNavigate()
    const [data,setData]=useState({})
    const {id}=useParams();
    console.log(id);
async function getDetails(){
    const res=await axios.get(`https://dummyjson.com/products/${id}`)

    setData(res.data)
    }
    const addToCart=()=>{
      const key=data.id
      console.log(key);
      localStorage.setItem(key,JSON.stringify(data))
     navigator('/cart')
    }

    useEffect(()=>{
        getDetails()
    },[])
    
    console.log(data);
    
  return (
    <div className="container">

          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12 my-3">
              <div className="row">
                <div className="col-lg-12 my-2">
                <img src={data.thumbnail} className='w-100' alt="" style={{width:"500px", height:"300px"}}/>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                  {/* {
                      data.images?.map((dt,index)=>(
                        <div className='col-lg-2 md-7'>
                          <img src={dt} alt='' className='w-100'/>
                        </div>
                      ))
                  }  */}

                  </div>
                </div>
                <div className="d-grid gap-3 col-6 md-auto ">
                <button className='btn btn-warning'onClick={addToCart}>Add to Cart</button>
                </div>
                  </div>
                </div>
                <div className="col-lg-6 col-mb-6 col-sm-12">
                  <h2>{data.title}</h2>
                  <h3>Rating :{data.rating}</h3>
                  <h4>Price :{data.price}</h4>
                </div>
          </div>
     </div>
              
        
  )
}

export default Details