import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
     
const Orders = ({token}) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if ( !token) {
      return null ;
    }

    try {
      
    } catch (error) {
      
    }

  }

  useEffect (() => {
    fetchAllOrders()
  }, [token])

  return (
    <div>
      
    </div>
  )
}

export default Orders
