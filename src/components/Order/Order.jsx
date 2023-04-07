import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AddToCard from '../AddTo/AddToCard';
import OrderItem from '../OrderItem/OrderItem';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
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
        <div className=''>
            <div className='mt-36 w-2/3 md:w-4/5'>
                {
                    card.map(product => <OrderItem key={product.id} product={product} handleRemoveCard={handleRemoveCard}></OrderItem>)
                }
            </div>
            <div>
                <AddToCard addToCard={card}>
                    <button className='bg-[#ba8639] rounded-xl w-full py-3 hover:bg-amber-500'>Chack out</button>
                </AddToCard>
            </div>
        </div>
    );
};

export default Order;