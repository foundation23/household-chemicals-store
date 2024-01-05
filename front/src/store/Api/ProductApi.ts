import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/consts";

export const getProducts = createAsyncThunk(
    "product/getProduct",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}product`);
            return res.data.rows;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);