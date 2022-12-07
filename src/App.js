import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom"
import {CustomProvider}  from "./components/CustomProvider";

function App () {
    return (
        <CustomProvider>
        <BrowserRouter>
            <Header/>
            <Main />
            <Footer />
        </BrowserRouter>
        </CustomProvider>
    )
}

export default App

