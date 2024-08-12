import { AuthProvider } from "./AuthProvider";
import Nav from "./components/Nav/Nav";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <AuthProvider>
          <body>
            <div>{children}</div>
          </body>
        </AuthProvider>
      </StoreProvider>
    </html>
  );
}
