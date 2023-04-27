import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { HandleRePass } from '../../App';

const OrderItem = ({ product }) => {
    const handleRemoveCard = useContext(HandleRePass);

    const { img, id, name, quantity, price } = product;
    return (
        <div className='flex flex-col md:flex-row gap-3  p-2 border-2 mb-4 rounded-xl mx-6 md:mx-44'>
            <img className='md:w-24 md:h-24 rounded-xl' src={img} alt="" />
            <div className='grow'>
                <h2 className='re-details-title'>{name}</h2>
                <p>price: <span className=''>{price}</span></p>
                <p>Order Quantity {quantity}</p>
            </div>
            <button onClick={() => handleRemoveCard(id)} className='bg-slate-300 p-4 w-full md:w-auto rounded-xl md:rounded-full'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default OrderItem;