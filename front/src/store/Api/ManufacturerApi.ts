import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/consts";

export const getManufacturers = createAsyncThunk(
    "manufacturers/getManufacturers",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}manufacturer`);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);