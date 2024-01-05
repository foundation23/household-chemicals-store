import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import {IProduct} from "../../types/IPoduct";
import product from "../../assets/info.json"
import {getProducts} from "../Api/ProductApi";



interface ProductState {
    products: IProduct[];
    isLoading: boolean;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<string>) {
            state.products = product
            state.products = state.products.filter((el) => el.type_of_care === action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.products = payload
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export const {setProducts} =
    productSlice.actions;

export default productSlice.reducer;