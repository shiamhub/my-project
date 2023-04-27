import React, { createContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Outlet, useLoaderData } from 'react-router-dom';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { getShoppingCart, removeFromDb } from './utilities/fakedb';

export const HandleRePass = createContext([]);
export const CardPass = createContext([]);

const App = () => {
  // const saveCard = useLoaderData();
  const [card, setCard] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect( () => {
    const loadData = async() => {
        const loadProduct = await fetch('/products.json');
        const product = await loadProduct.json();
        const storedCard = getShoppingCart();
        const saveCard = [];
        for(const id in storedCard) {
            const addedOrder = product.find(pd => pd.id === id)
            if(addedOrder) {
                const quantity = storedCard[id];
                addedOrder.quantity = quantity;
                saveCard.push(addedOrder);
            }
        }
        setCard(saveCard);
    }
    loadData();
  }, [reload])
  // console.log(card);

  const handleRemoveCard = (id) => {
    const remaining = card.filter(product => product.id !== id);
    setCard(remaining);
    removeFromDb(id);
  };

  return (
    <HandleRePass.Provider value={handleRemoveCard}>
      <CardPass.Provider value={[card, setCard, reload, setReload]}>
        <div className=''>
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </CardPass.Provider>
    </HandleRePass.Provider>
  );
};

export default App;