import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AddToCard = ({addToCard, deleteItem}) => {
    // const addToCard = props.addToCard;
    // console.log(addToCard);
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of addToCard) {
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    };
    let totalTax = total * 7 / 100;
    const grandTotal = total + totalShipping + totalTax;
        
    return (
        <div className=''>
            <div className='ml-5 mr-5'>
                <h2 className='text-center'>Order Summary</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
                <button onClick={() => localStorage.removeItem('shopping-cart')} className='bg-[#cb9340] rounded-xl mt-7 mb-7 w-full py-3 hover:bg-amber-500'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                <br />
                <button className='bg-[#ba8639] rounded-xl mb-7 w-full py-3 hover:bg-amber-500'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default AddToCard;