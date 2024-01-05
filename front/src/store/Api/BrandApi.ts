import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/consts";

export const getBrands = createAsyncThunk(
    "brands/getBrands",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}brand`);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);