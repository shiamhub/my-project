import React, { useState } from 'react';
import OrderItem from '../OrderItem/OrderItem';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';

const ReviewItem = () => {
    const saveCard = useLoaderData();
    const [card, setCard] = useState(saveCard);
    console.log(saveCard);

    const handleRemoveCard = (id) => {
        console.log(id);
        const remaining = card.filter(product => product.id !== id);
        setCard(remaining);
        removeFromDb(id);
    }

    return (
        <div className='mt-24'>
            {
                card.map(product => <OrderItem key={product.id} product={product} handleRemoveCard={handleRemoveCard}></OrderItem>)
            }
        </div>
    );
};

export default ReviewItem;