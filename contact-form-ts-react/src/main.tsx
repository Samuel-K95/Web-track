import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./CSS/App.css";
import ContactForm from "./routes/ContactForm";
import Forms from "./routes/Forms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactForm />,
  },
  {
    path: "/Forms/",
    element: <Forms />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
