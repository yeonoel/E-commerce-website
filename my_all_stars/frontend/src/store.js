
import {createStore} from 'redux';
import produce from 'immer';

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
        return produce(state, (draft) => {
            draft.cart.push(action.payload)
        })
    }
    return state;
};



const store = createStore(reducer);

export default store;

