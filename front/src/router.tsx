import { createBrowserRouter } from "react-router";
import { AuthForm } from "./forms/auth-form";
import { Messager } from "./forms/messager";
export const router = createBrowserRouter([
     {
    path: "/",
    element: <AuthForm />,
  },
  {
    path: "/messager",
    element: <Messager />,
  },
])