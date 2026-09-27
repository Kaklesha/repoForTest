import { createBrowserRouter } from "react-router";
import { AuthForm } from "./forms/auth-form";
import { Messager } from "./forms/messager";
createBrowserRouter([
    {index:true, Component: AuthForm},
    {Component: Messager, path:"/messager"}
])