import React from 'react';

const OrderItem = ({product, handleRemoveCard}) => {
    const {img, id, name, quantity, price} = product;
    return (
        <div className='md:flex flex flex-col justify-center gap-3 items-center p-2 border-2 mb-4 rounded-xl mx-6 md:mx-44'>
            <img className='md:w-24 md:h-24 rounded-xl' src={img} alt="" />
            <div className='grow'>
                <h2 className='re-details-title'>{name}</h2>
                <p>price: <span className=''>{price}</span></p>
                <p>Order Quantity {quantity}</p>
            </div>
            <button onClick={() => handleRemoveCard(id)} className='bg-slate-300 p-4 w-full rounded-xl md:rounded-full'>D</button>
        </div>
    );
};

export default OrderItem;