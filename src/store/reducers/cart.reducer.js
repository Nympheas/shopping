import { handleActions as createReducer } from 'redux-actions'
import { addProductToCartLocal, changeLocalProductNumber, deleteProductFromCartLocal, saveCarts } from '../actions/cart.action';

const initialState = [];

const handleAddProductToLocal = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    const product = newState.find(product => product.id === action.payload.id)
    if (product) {
        product.count = product.count + 1
    } else {
        newState.push(action.payload)
    }
    return newState
}

const handleSaveCarts = (state, action) => action.payload

const handleDeleteProductFromCartLocal = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.splice(action.id, 1)
    return newState
}

const handleChangeLocalProductNumber = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    const product = newState.find(product => product.id === action.payload.id)
    product.count = action.payload.count
    return newState
}

export default createReducer({
    [addProductToCartLocal]: handleAddProductToLocal,
    [saveCarts]: handleSaveCarts,
    [deleteProductFromCartLocal]: handleDeleteProductFromCartLocal,
    [changeLocalProductNumber]: handleChangeLocalProductNumber
}, initialState)