import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import myProfile from "./MyProfile";

function profile() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/myProfile" element={<myProfile></myProfile>}></Route>
            </Routes>
        </BrowserRouter>
    )
}