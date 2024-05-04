import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Details from './pages/Details'
import cart from './pages/cart'
function App() {
  const [count, setCount] = useState(0)

  const[search,setSearch]=useState("")

  return (
    <>
     <BrowserRouter>
     <Nav setSearch={setSearch}/>
        <Routes>
          <Route path='/' element={<Home search={search}/>}></Route>
          <Route path='/details/:id'   Component={Details} />
          <Route path='/cart' Component={cart}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
