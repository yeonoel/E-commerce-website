
import {createStore} from 'react-redux';
import product from 'immer';

const initalState = {
    cart: []
};

export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
};


function reducer( state = initalState, action ) {
    if (action.type === 'ADD_TO_CART') {
        return product (state, (draft) => {
            draft.cart.push(action.payload)
        })
    }

};



const store = createStore(reducer);

export default store;