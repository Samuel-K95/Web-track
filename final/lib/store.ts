import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./service/UserData";
import { jobsApi } from "./service/Jobdata";

export const store = () => {
  return configureStore({
    reducer: {
      [userApi.reducerPath]: userApi.reducer,
      [jobsApi.reducerPath]: jobsApi.reducer,
    },
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(userApi.middleware, jobsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
