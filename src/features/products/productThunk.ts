import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Product } from '../../types';

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetch',
  async () => {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
    return response.data;
  }
);