import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api/https'

export const getCategoriesAsync = createAsyncThunk('categories/fetchCategories', async (depth) => {
    try {
        const result = await api.getAllCategories(depth);

        return result.data.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})
