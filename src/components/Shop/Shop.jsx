import React, { useEffect, useState } from 'react';
import AddToCard from '../AddTo/AddToCard';
import Card from '../Card/Card';

const Shop = () => {
    const [data, setData] = useState([]);
    const [myProduct, setMyProduct] = useState([]);
    // console.log(myProduct);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(datas => setData(datas))
    },[]);

    const addToCard = (product) => {
        setMyProduct([...myProduct, product])
    }

    return (
        <div className='flex mt-28'>
            <div className=' ml-24 w-4/5 grid grid-cols-3 gap-5'>
                {
                    data.map(product => <Card addToCard={addToCard} product={product} key={product.id}></Card>)
                }
            </div>
            <div className='w-1/5 fixed top-[75px] right-0 h-screen bg-lime-200'>
                <AddToCard></AddToCard>
            </div>
        </div>
    );
};

export default Shop;