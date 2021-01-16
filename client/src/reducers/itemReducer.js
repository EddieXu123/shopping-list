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
        default:
            return state;
    }
}