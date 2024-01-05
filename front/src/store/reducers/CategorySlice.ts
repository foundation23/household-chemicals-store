import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ICategory} from "../../types/ICategory";
import {getCategory} from "../Api/CategoryApi";

interface CategoryState{
    categories: ICategory[];
    searchValue: string;
    categoryId: number;
    currentPage: number;
    isLoading: boolean;
}

const initialState: CategoryState = {
    categories: [],
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    isLoading: false
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<any>) {
            if (Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage);
                state.categoryId = Number(action.payload.categoryId);
            } else {
                state.currentPage = 1;
                state.categoryId = 0;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCategory.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategory.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.categories = payload
        });
        builder.addCase(getCategory.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export const { setCategoryId, setCurrentPage, setFilters, setSearchValue} =
    categorySlice.actions;

export default categorySlice.reducer;