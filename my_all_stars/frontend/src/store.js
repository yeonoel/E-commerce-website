
import {createStore} from 'redux';
import produce from 'immer';

const initalState = {
    cart: []
};

export const addToCart = (product, shoeId, size) => {
    return {
        type: "ADD_TO_CART",
        payload: {shoeId, product, size}
    }
};

export const removefromCart = (productId, size) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: {productId, size}
    }
};

export const removeById = (shoeid) => {
    return {
        type: "DELETE_BY_CLICKING_THE_CROSS",
        payload: shoeid
    }
};

function reducer( state = initalState, action ) {
    if (action.type === 'ADD_TO_CART') {
        return produce(state, (draft) => {
            const itemIndex = draft.cart.findIndex(item =>
                item.id === action.payload.shoeId );
                console.log(itemIndex)
            if (itemIndex === -1) {
                draft.cart.push(action.payload.product)
                    
            } else {
                const size = action.payload.size;
                    
                if (draft.cart[itemIndex].sizeSelected[size]) {
                    draft.cart[itemIndex].sizeSelected[size] += 1;
                } else {
                        draft.cart[itemIndex].sizeSelected[size] = 1;
                }
                    
            }

        });
    }

    if (action.type === 'REMOVE_FROM_CART') {
        return produce(state, (draft) => {
            const itemIndex = draft.cart.findIndex(item =>
                item.id === action.payload.productId &&
                item.sizeSelected && item.sizeSelected[action.payload.size]
            );
    
            if (itemIndex !== -1) {
                const size = action.payload.size;
                draft.cart[itemIndex].sizeSelected[size] -= 1;
                if (draft.cart[itemIndex].sizeSelected[size] === 0) {
                    delete draft.cart[itemIndex].sizeSelected[size];
                }
                if (Object.keys(draft.cart[itemIndex].sizeSelected).length === 0) {
                    draft.cart.splice(itemIndex, 1); // Supprimer l'élément du tableau si plus aucune taille sélectionnée
                }
            }
        });
    }

    if (action.type === "DELETE_BY_CLICKING_THE_CROSS") {
        return produce(state, (draft) => {
            console.log("tttttttt" + action.payload.shoeid)
            const itemIndex = draft.cart.findIndex(item => item.id === action.payload.shoeid);
            if (itemIndex !== -1) {
                console.log(itemIndex);
                draft.cart.splice(itemIndex, 1)
            }
        });
    }
    return state;
};


const store = createStore(reducer);

export default store;

