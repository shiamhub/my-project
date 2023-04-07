import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import AddToCard from '../AddTo/AddToCard';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

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
    
    const handleClearCard = () => {
        setMyProduct([]);
        deleteShoppingCart();
    }

    return (
        <div className='flex mt-28'>
            <div className='md:pl-24 p-4 md:pr-6 w-2/3 md:w-4/5 md:grid md:grid-cols-3 gap-5'>
                {
                    data.slice(0, 9).map(p => <Card addToCard={addToCard}  product={p} key={p.id}></Card>)
                }
            </div>
            <div className=''>
                <AddToCard addToCard={myProduct} handleClearCard={handleClearCard}>
                    <Link to="/reviewItem"><button className='bg-[#ba8639] rounded-xl w-full py-3 hover:bg-amber-500'>Review order</button></Link>
                </AddToCard>
            </div>
        </div>
    );
};

export default Shop;