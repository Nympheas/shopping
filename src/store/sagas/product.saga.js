import { takeEvery, put } from 'redux-saga/effects'
import { loadProducts, saveProducts } from '../actions/product.action'
import axios from 'axios'

function* handleLoadProduct() {
    const { data } = yield axios.get('http://localhost:3005/goods');
    // 将商品列表数据保存到本地的store对象中
    yield put(saveProducts(data));
}

export default function* productSaga() {
    yield takeEvery(loadProducts, handleLoadProduct)
}

