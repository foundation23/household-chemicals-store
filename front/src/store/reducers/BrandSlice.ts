import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IBrand } from "../../types/IBrand";
import {getBrands} from "../Api/BrandApi";



interface BrandState{
    brands: IBrand[];
    searchValue: string;
    currentPage: number;
    isLoading: boolean;
}

const initialState: BrandState = {
    isLoading: false,
    brands:[],
    searchValue: '',
    currentPage: 1,
}

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getBrands.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBrands.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.brands = payload
        });
        builder.addCase(getBrands.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export const { } =
    brandSlice.actions;

export default brandSlice.reducer;