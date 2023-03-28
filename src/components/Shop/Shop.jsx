import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(datas => setData(datas) )
    },[])

    return (
        <div>
            <h1>{data.length}</h1>
        </div>
    );
};

export default Shop;