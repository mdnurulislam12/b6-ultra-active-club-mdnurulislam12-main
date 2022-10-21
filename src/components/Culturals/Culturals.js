import React, { useEffect, useState } from 'react';
import Cultural from '../Cultural/Cultural';
import './Culturals.css';
import logo from '../../images/Logo.png';
import Cart from '../Cart/Cart';

const Culturals = () => {
    
    const [culturals, setCulurals] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        fetch('fakeDb.json')
        .then(res => res.json())
        .then(data => setCulurals(data))
    },[])

    let newCart = [];
    const handleAddToCart = (cultural)=>{
        newCart = [...cart, cultural]
        setCart(newCart);
    }

    return (
        <div className='culturals-container'>
            <div>
                <div className='club-logo'> 
                <img src={logo} alt="" />
                <h1>Deshi Cultural Club</h1>
                </div>
                <h4 className='selected'>Selected today culturals activity</h4>
                <div className='activity-container'>
                    {
                        culturals.map(cultural => <Cultural 
                        key={cultural.id}
                        cultural={cultural}
                        handleAddToCart = {handleAddToCart}
                        ></Cultural>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Culturals;