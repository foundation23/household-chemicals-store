import {combineReducers, configureStore} from '@reduxjs/toolkit'
import productReducer from './reducers/ProductSlice'
import categoryReducer from './reducers/CategorySlice'
import cartReducer from './reducers/CartSlice'
import brandReducer from './reducers/BrandSlice'
import manufacturerReducer from './reducers/ManufacturerSlice'

const rootReducer = combineReducers({
    productReducer,
    categoryReducer,
    brandReducer,
    manufacturerReducer,
    cartReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']