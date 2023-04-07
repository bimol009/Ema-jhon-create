import Header from "../Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;