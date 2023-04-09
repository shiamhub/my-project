import { getShoppingCart } from "../utilities/fakedb";

const loadAddOrder = async() => {
    const loadProduct = await fetch('products.json');
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
    return saveCard;
};

export default loadAddOrder;