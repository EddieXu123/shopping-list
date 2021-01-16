import { v4 as uuid } from 'uuid';
import * as types from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: "Eggs" },
        { id: uuid(), name: "Milk" },
        { id: uuid(), name: "Steak" },
        { id: uuid(), name: "Candy" },
    ]
    
}

// eslint-disable-next-line 
export default function(state = initialState, action) {
    switch (action.type) {
        case types.GET_ITEMS:
            return {
                ...state
            };
        case types.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case types.ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
}