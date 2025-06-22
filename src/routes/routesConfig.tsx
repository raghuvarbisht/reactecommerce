
import type { ReactElement } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Products from "../pages/Products";
import CommonElement from "../pages/CommonElement";

export interface AppRoute {
    path: string;
    element: ReactElement;
    protected?: boolean;
    roles?: string[]
}

export const routes: AppRoute[] = [    
 { path: '/', element: <Home /> },
 { path: '/login', element: <Login /> , protected: false },
 { path: '/aboutus', element: <About /> },
 { path: '/contact', element: <Contact /> }, 
 { path: '/profile', element: <Profile />, protected: true },
 { path: '/products', element: <Products />, protected: true },
 { path: '/elements', element: <CommonElement />, protected: false },
 

];