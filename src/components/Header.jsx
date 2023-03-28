import '../styles/Header.css'
import logo from '../assets/americanas.png'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from '@phosphor-icons/react';


export default function Header() {

    const {shop} = useContext(CartContext);

    return(
        <div>
            <div className='header'>
                <div className="header-left">
                        <img src={logo} alt="" height={30}/>
                    <div>
                        <Link to="/" className='link'>
                            <h1>Loja Online</h1>
                        </Link>
                    </div>
                </div>
                <div className='header-right'>
                    <Link to="/cart" className='link'>
                        <div className='cart-container'>
                            <span className='number-cart'>{shop?.length??""}</span>
                            <ShoppingCart size={32} color="white" weight="fill" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}