import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
    return (
        <div className='CartWidget-container'>
            <AiOutlineShoppingCart />
            <i className="bi bi-2-circle"></i>  
        </div>
    )
};

export default CartWidget;