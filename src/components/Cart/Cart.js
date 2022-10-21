import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';
import img from '../../images/image.jpg';
import { addToDb, getStoredCart } from '../Utilities/fakedb';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart)
    
    const [breakTime, setBreakTime] = useState([]);

    useEffect( ()=>{
        const storedCart = getStoredCart();
        const saveCart = [];

        for(const time in storedCart){
        //    console.log(time);
            saveCart.push(time)
        
        }
        setBreakTime(saveCart)
    },[])

    function setCommonBreakTimeId(elamentId, value){
        const timeElament = document.getElementById(elamentId);
        const time = timeElament.innerText;
        setBreakTime(time);
        addToDb(time);
    }

    const hendleTwenty = ()=>{
        setCommonBreakTimeId('twenty');
    }

    const hendleThirty = ()=>{
        setCommonBreakTimeId('thirty');
    }
    const hendleForty = ()=>{
        setCommonBreakTimeId('forty');
    }
    const hendleFifty = ()=>{
        setCommonBreakTimeId('fifty')
    }


    let total = 0;
    for(const cultural of cart){
        total = total + cultural.time;
    }

    const massesToast = () => toast.success("Activity Completed!!", {
        position:"top-center"
    });

    return (
        <>
            <div className='cart'>
                <div className='my-info'>
                    <img src={img} alt="" /> 
                    <div className='imag-info'>
                        <h4>Md Nurul islam</h4>
                        <p><small>Bangladesh</small></p>
                    </div>
                    
                </div>
                <h5>Weight: 51<small>kg</small></h5>
                <h5>Height: 5.6</h5>
                <h5>Age: 21<small>yrs</small></h5>
                <div className='break'>
                    <h3>Add A Break :-</h3>
                    <div className="break-info">
                        <p onClick={hendleTwenty}><span id='twenty'>20</span>m</p>
                        <p onClick={hendleThirty}><span id='thirty'>30</span>m</p>
                        <p onClick={hendleForty}><span id='forty'>40</span>m</p>
                        <p onClick={hendleFifty}><span id='fifty'>50</span>m</p>
                    </div>
                </div>
                <div className='cultural-details'>
                    <h3>Cultural Details :-</h3>
                    <div className='cultural-time'>
                        <h4>Cultural time</h4> 
                        <h4>{total} minutes</h4>
                    </div>
                    <div className='break-time'>
                        <h4>Break time</h4> 
                        <h4>{breakTime} minutes</h4>
                    </div>
                </div>
                <button  onClick={massesToast} className='activity-btn'>
                    <p>Activity Completed</p>
                </button>
            </div>
            <ToastContainer />
        </>
    );
};

export default Cart;