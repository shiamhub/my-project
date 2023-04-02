import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import AddToCard from '../AddTo/AddToCard';
import Card from '../Card/Card';

const Shop = () => {
    const [data, setData] = useState([]);
    const [myProduct, setMyProduct] = useState([]);
    const [reItem, setReItem] = useState(false);
    // console.log(myProduct);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(datas => setData(datas))
    },[]);

    useEffect(() => {
        const storeCard = getShoppingCart();
        const saveCard = [];
        // console.log(storeCard);
        for(const id in storeCard) {
            const addedProduct = data.find((product) => product.id === id)
            if(addedProduct) {
                const quantity = storeCard[id];
                addedProduct.quantity = quantity;
                saveCard.push(addedProduct);
            };
        };
        setMyProduct(saveCard);
    }, [data, reItem]);

    const addToCard = (product) => {
        console.log(product)
        // setMyProduct([...myProduct, product]);
        let add = [];
        const exists = myProduct.find((p) => p.id === product.id);
        // console.log(exists);
        if(exists) {
            exists.quantity = exists.quantity + 1;
            const remaining = myProduct.filter(p => p.id !== product.id);
            add = [...remaining, exists];
        }
        else {
            product.quantity = 1;
            add = [...myProduct, product];
            console.log(add);
        }
        setMyProduct(add);
        addToDb(product.id);
    };
    
    const deleteItem = (product) => {
        // const getId = myProduct.find(p => p.id === product.id);
        removeFromDb(product.id);
        setReItem(!reItem);

    }

    return (
        <div className='flex mt-28'>
            <div className='md:pl-24 p-4 md:pr-6 w-2/3 md:w-4/5 md:grid md:grid-cols-3 gap-5'>
                {
                    data.map(p => <Card addToCard={addToCard} deleteItem={deleteItem} product={p} key={p.id}></Card>)
                }
            </div>
            <div className='md:w-1/5 w-1/3 fixed top-[75px] right-0 h-screen bg-lime-200'>
                <AddToCard addToCard={myProduct}></AddToCard>
            </div>
        </div>
    );
};

export default Shop;