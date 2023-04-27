import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AddToCard from '../AddTo/AddToCard';
import OrderItem from '../OrderItem/OrderItem';
import { removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import { CardPass } from '../../App';

const Order = () => {
    // const handleRemoveCard = useContext(HandleRePass)
    const [card, setCard, reload, setReload ] = useContext(CardPass);
    // const [reload, setReload] = useState(true);
    useEffect(() => {
        setReload(!reload);
    }, [])

    return (
        <div className=''>
            <div className='mt-36 w-2/3 md:w-4/5'>
                {
                    card.map(product => <OrderItem key={product.id} product={product}></OrderItem>)
                }
            </div>
            <div>
                <AddToCard addToCard={card}>
                    <Link to="/chackOut"><button className='bg-[#ba8639] rounded-xl w-full py-3 hover:bg-amber-500'>Chack out</button></Link>
                </AddToCard>
            </div>
        </div>
    );
};

export default Order;