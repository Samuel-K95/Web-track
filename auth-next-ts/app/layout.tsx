"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import AuthProvider from "./components/AuthProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //
  return (
    <html lang="en">
      <AuthProvider>
        <Provider store={store}>
          <body>{children}</body>
        </Provider>
      </AuthProvider>
    </html>
  );
}
