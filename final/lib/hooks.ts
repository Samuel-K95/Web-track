import { useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

const data = {
  success: true,
  message: "User registered successfully",
  data: {
    access_token:
      "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzYW1pdGVzdCIsImlhdCI6MTcyMzc5NDQ5NywiZXhwIjoxNzIzODgwODk3fQ.NyvkjiuWKRop8BF3D2ZdUfcINgaKgcDmLpf8Ufd487ZtBZ0983c3fodwmdmDMpjo",
    refresh_token:
      "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzYW1pdGVzdCIsImlhdCI6MTcyMzc5NDQ5NywiZXhwIjoxNzI0Mzk5Mjk3fQ.sz1vAHfw9lXAhOIIlrBAGDjFUhOfXnYjXE3RhY7ZuHyUkWUFCae9rxbMh39D_xzN",
    data: {
      id: "66bf0441bd858a509ad95912",
      name: "sami test",
      email: "samitest.doe@example.com",
      dateOfBirth: "2000-01-01T00:00:00.000+00:00",
      permanentAddress: "123 Main St, Hometown",
      postalCode: "12345",
      username: "samitest",
      presentAddress: "456 Elm St, Hometown",
      city: "Hometown",
      country: "Countryland",
      profilePicture: "default-profile.png",
      accountBalance: 0,
      role: "USER",
      preference: {
        currency: "USD",
        sentOrReceiveDigitalCurrency: false,
        receiveMerchantOrder: false,
        accountRecommendations: false,
        timeZone: "UTC",
        twoFactorAuthentication: false,
      },
    },
  },
};

// pass = password12345
