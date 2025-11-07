import { useEffect, useState } from 'react'
import './index.css'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import { Routes, Route, Navigate  } from 'react-router-dom'
import Login from './component/Login'
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

function App() {

  // when we refresh the page we get automatic logout
  const [token, setToken] = useState (localStorage.getItem('token')?localStorage.getItem('token'):"")
  // Save token to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === ""
      ? <Login setToken= {setToken}/>
      : <>
          <Navbar setToken={setToken}/>
          <hr />
          <div className='flex w-full'>
            <Sidebar/>
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path="/" element={<Navigate to="/list" />} />
                <Route path='/add' element={<Add token={token} />}/>
                <Route path='/list' element={<List token={token} />}/>
                <Route path='/orders' element={<Orders token={token} />}/>
              </Routes>
            </div>
          </div>
        </> }
        
    </div>
  )
}

export default App


// upload images 
// https://res.cloudinary.com/dc5154n7n/image/upload/v1761742140/upload_area_x7zilt.png

// parcle icon
// https://res.cloudinary.com/dc5154n7n/image/upload/v1761742140/parcel_icon_dgxf1l.svg