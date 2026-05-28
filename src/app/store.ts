import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/campaigns/campaignSlice";

export const store = configureStore({
    reducer: {
        campaigns: reducer
    }, 
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
