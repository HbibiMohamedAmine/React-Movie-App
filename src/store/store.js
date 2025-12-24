import {configureStore} from '@reduxjs/toolkit';
import film from '../features/counter/counterSlice'
export const store = configureStore({
    reducer: {
        film: film,
    },
});
export default store;