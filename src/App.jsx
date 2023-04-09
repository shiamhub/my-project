import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Outlet, useLoaderData } from 'react-router-dom';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { removeFromDb } from './utilities/fakedb';

export const HandleRePass = createContext([]);
export const CardPass = createContext([]);

const App = () => {
  const saveCard = useLoaderData();
  const [card, setCard] = useState(saveCard);

  const handleRemoveCard = (id) => {
    console.log(id);
    const remaining = card.filter(product => product.id !== id);
    setCard(remaining);
    removeFromDb(id);
  };

  return (
    <HandleRePass.Provider value={handleRemoveCard}>
      <CardPass.Provider value={[card, setCard]}>
        <div className=''>
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </CardPass.Provider>
    </HandleRePass.Provider>
  );
};

export default App;