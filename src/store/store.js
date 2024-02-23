import {configureStore} from '@reduxjs/toolkit'
import videoSlice from './videoSlice';
import toggleSlice from './toggleSlice';

const store = configureStore({
    reducer:{
        video:videoSlice,
        toggle:toggleSlice
    }
})

export default store;