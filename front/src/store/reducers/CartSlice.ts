import {createSlice} from '@reduxjs/toolkit'
import {IProduct} from "../../types/IPoduct";

interface CartState {
    cart: IProduct[];
    amount: number;
    quantity: number;
    isLoading: boolean;
}

const initialState: CartState = {
    cart: [],
    amount: 0,
    quantity: 0,
    isLoading: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let item = state.cart.find(item => item.barcode === action.payload.barcode)
            if (item) {
                // Если товар уже есть, увеличиваем его количество на 1
                item.count += 1
                state.quantity += 1
                state.amount += action.payload.price
            } else {
                // Если товара нет, добавляем его в список с начальным количеством 1
                state.cart.push(action.payload)
                state.amount += action.payload.price
                state.quantity += 1
            }
        },
        deleteOneProduct: (state, action) => {
            let item = state.cart.find(item => item.barcode === action.payload)
            if (item && item.count > 1) {
                // Если товар уже есть, уменьшаем его количество на 1
                item.count -= 1
                state.quantity -= 1
                state.amount -= item.price
            } else {
                state.cart = state.cart.filter(product => product.barcode !== action.payload)
                state.quantity -= 1
                state.amount = state.cart.reduce((accum, item) => accum + item.price * item.count, 0)
            }
        },
        deleteProducts: (state, action) => {
            state.cart = state.cart.filter(product => product.barcode !== action.payload)
            state.quantity = state.cart.reduce((accum, item) => accum + item.count, 0)
            state.amount = state.cart.reduce((accum, item) => accum + item.price * item.count, 0)
        }

    }
})
export const {
    addProduct,
    deleteOneProduct,
    deleteProducts,
} = cartSlice.actions

export default cartSlice.reducer;