import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AddToCard = ({addToCard, children}) => {
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
        <div className='md:w-1/5 w-1/3 fixed top-[76px] right-0 h-screen bg-lime-200'>
            <div className='ml-5 mr-5 flex flex-col gap-3'>
                <h2 className='text-center pt-8 font-medium text-2xl'>Order Summary</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
                <button onClick={() => localStorage.removeItem('shopping-cart')} className='bg-[#cb9340] rounded-xl mt-7 w-full py-3 hover:bg-amber-500'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                <br />
                {/* <button className='bg-[#ba8639] rounded-xl w-full py-3 hover:bg-amber-500'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button> */}
                {children}
            </div>
        </div>
    );
};

export default AddToCard;