import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    const addToCard = props.addToCard;
    const deleteItem = props.deleteItem;
    // console.log(addToCard);
    // console.log(props.product);
    const {id, img, name, price, ratings, shipping, seller} = props.product;
    return (
        <div className='border-2 rounded-xl'>
            <img className='rounded-xl p-2' src={img} alt="" />
            <div className='ml-2'>
                <h4>{name}</h4>
                <h6>Price: ${price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}start</p>
            </div>
            <button onClick={() => addToCard(props.product)} className='bg-[#FFE0B3] w-full py-3 hover:bg-amber-500'>Add to Card<FontAwesomeIcon icon={faShoppingCart} /></button>
            <button onClick={() => deleteItem(props.product)} className='bg-[#FFE0B3] rounded-b-xl w-full py-3 mt-4 hover:bg-amber-500'>remove to Card<FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Card;