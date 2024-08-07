import { configureStore } from "@reduxjs/toolkit";
import { jobsApi } from "./service/data";


export const makestore = () => {
    return configureStore({
        reducer: {
            [jobsApi.reducerPath]: jobsApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(jobsApi.middleware),
    })
}


export type AppStore = ReturnType<typeof makestore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

