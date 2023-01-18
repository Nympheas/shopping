import { createAction } from 'redux-actions'

export const addProductToCart = createAction('addProductToCart')
export const addProductToCartLocal = createAction('addProductToCartLocal')
export const loadCarts = createAction('loadCarts')
export const saveCarts = createAction('saveCarts')
export const deleteProductFromCart = createAction('deleteProductFromCart')
export const deleteProductFromCartLocal = createAction('deleteProductFromCartLocal')
export const changeServiceProductNumber = createAction('changeServiceProductNumber')
export const changeLocalProductNumber = createAction('changeLocalProductNumber')