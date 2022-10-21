import React from 'react';
import './Cultural.css';

const Cultural = (props) => {
    const {handleAddToCart, cultural} = props;
    const {name, time, img, details} = cultural;
    // console.log(props.cultural)
    
    return (
        <div className='cultural'>
            <img src={img} alt="" />
            <div className='cultural-info'>
                <h2>{name.slice(0,30)}...</h2>
                <p>{details.slice(0,50)}...</p>
                <h5>Time required: {time}m</h5>
                <button onClick={()=>handleAddToCart(cultural)} className="btn-cultural">
                    <p>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Cultural;