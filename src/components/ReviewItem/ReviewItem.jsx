import React, { useContext, useState } from 'react';
import OrderItem from '../OrderItem/OrderItem';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import { CardPass, HandleRePass } from '../../App';

const ReviewItem = () => {
    const handleRemoveCard = useContext(HandleRePass)
    const [card, setCard] = useContext(CardPass)
    console.log(card);

    return (
        <div className='mt-24'>
            {
                card.map(product => <OrderItem key={product.id} product={product} handleRemoveCard={handleRemoveCard}></OrderItem>)
            }
        </div>
    );
};

export default ReviewItem;