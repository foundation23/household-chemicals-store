import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/consts";

export const getCategory = createAsyncThunk(
    "categories/getCategories",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}typeCare`);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);