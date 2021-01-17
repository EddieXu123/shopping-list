import axios from 'axios';
import * as types from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/items') // Can just do this b/c we added proxy to 5000
        .then(res => 
            dispatch({
                type: types.GET_ITEMS,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addItem = item => (dispatch, getState) => {
    axios
        .post('api/items', item, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: types.ADD_ITEM,
                payload: res.data // sends new item to reducer 
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteItem = id => (dispatch, getState) => {
    axios
        .delete(`api/items/${id}`, tokenConfig(getState)) // Attach token to request in header
        .then(res => 
            dispatch({
                type:types.DELETE_ITEM,
                payload: id
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

};

export const setItemsLoading = () => {
    return {
        type: types.ITEMS_LOADING
    };
}