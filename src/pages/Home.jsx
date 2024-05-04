import React, { useEffect, useState } from "react";
import './Home.scss'
import axios from 'axios' 
import Loading from '../components/Loading'
import { Link } from "react-router-dom";

const Home=({search})=>{
    const [data,setData]=useState([])
    const [filter,setFilter]=useState([])
    const [categories,setCategories]=useState([])
    async function getProducts(){
        const res=await axios.get("https://dummyjson.com/products/")
        setData([...res.data.products])
        const resCat=await axios.get("https://dummyjson.com/products/categories/")
        setCategories([...resCat.data])
    }
    useEffect(()=>{
        getProducts()
    },[])
    if(data.length==0)
    return(<Loading/>)
    return (
        <div className="home">
         <div className="container-fluid p-3 d-flex" style={{overflow:"auto"}}>
            <button className="btn btn-secondary px-3" onClick={()=>{setFilter("")}}>ALL </button>

            {
                categories.map((cat,index)=>(<button className="btn btn-outline-secondary px-3 mx-2"
                key={index} onClick={()=>{setFilter(cat)}}>{cat}</button>))
            }
            
            </div>  
            <div className="container">
                <div className="row">
                    {
                        data.filter(i=> i.title.toLowerCase().includes(search.toLowerCase()))
                        .filter((i)=> i.category.includes(filter))
                        .map((dt,index)=>(<div className='col-lg-3 my-5 cl' key={index}>
                            <Link to={`/details/${dt.id}`} style={{textDecoration:"none"}}className="text-dark">
                            <div className="card shadow crd" style={{width:"14rem"}}>
                        <div className="image" style={{width:"100%",height:"200px"}}>
                        <img src={dt.thumbnail} className="card-img-top" alt="" style={{width:"100%",height:"200px",objectFit:"cover"}}/>
                        </div>
    
                        <div className="card-body text-center">
                          <h5 className="card-title">{dt.title.substring(0,15)}</h5>
                          <p className="card-text">Rating:{dt.rating}</p>
                          <p className="card-text">Price:{dt.price}</p>
                          <div className='d-grid gap-2'>
                          <a href="#" className="btn btn-primary">BUY</a>
                          </div>
                          </div>
                      
                        </div> 
                            </Link>
                      
                      </div>))
                    }
                </div>
        </div>
        </div>
    )
}
export default Home