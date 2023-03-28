import React from 'react';

const Card = (props) => {
    const addToCard = props.addToCard;
    // console.log(addToCard);
    // console.log(props.product);
    const {id, img, name, price, ratings, shipping, seller} = props.product;
    return (
        <div className='w-64 border-2 rounded-xl'>
            <img className='rounded-xl p-1' src={img} alt="" />
            <h4>{name}</h4>
            <h6>Price: ${price}</h6>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}start</p>
            <button onClick={() => addToCard(props.product)} className='bg-[#FFE0B3] rounded-b-xl w-full py-3 hover:bg-amber-500'>Add to Cart</button>
        </div>
    );
};

export default Card;