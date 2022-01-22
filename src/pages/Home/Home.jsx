import React from "react";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import SideBar from "../../SideBar/SideBar";
import './home.css'

export default function Home() {
    return (
        <>
            <Header/>
            <div className="home">
                <Posts/>
                <SideBar/>
            </div>
        </>
    )
}