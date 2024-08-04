"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makestore, AppStore } from "@/lib/store";
import "./globals.css";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makestore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
