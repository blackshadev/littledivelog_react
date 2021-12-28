import React from "react"

import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";

import Home from "./pages/Home";

const Routes = () => 
    <>
        <BrowserRouter>
            <RouterRoutes>
                <Route index element={<Home />}></Route>
            </RouterRoutes>
        </BrowserRouter>
    </>

export default Routes;