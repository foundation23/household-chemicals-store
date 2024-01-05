import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IManufacturer } from "../../types/IManufacturer";
import {getManufacturers} from "../Api/ManufacturerApi";

interface ManufacturerState{
    manufacturers: IManufacturer[];
    searchValue: string;
    currentPage: number;
    isLoading: boolean;
}

const initialState: ManufacturerState = {
    isLoading: false,
    manufacturers:[],
    searchValue: '',
    currentPage: 1,
}

export const manufacturerSlice = createSlice({
    name: 'manufacturer',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getManufacturers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getManufacturers.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.manufacturers = payload
        });
        builder.addCase(getManufacturers.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export const { } =
    manufacturerSlice.actions;

export default manufacturerSlice.reducer;