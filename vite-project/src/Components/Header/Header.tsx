import React from 'react'
import { Link } from 'react-router-dom'
import ProductPage from '../../Pages/ProductPage'
import CartPage from '../../Pages/Cartpage'
import "./header.module.css"

const Header = () => {
  return (
    <>
    <div className='header'>
    <div>
        <Link to="/"><img src={"https://static.vecteezy.com/ti/gratis-vektor/p1/8629579-tomte-logo-mall-gratis-vector.jpg"} className='logo'  alt="Home Link" /></Link>
        <Link to="/ProductPage">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    
    </div>

    </>
  )
}

export default Header