import React from "react";
import "./HomePage.scss";

import { PageType } from "../types";
import { useSelector } from "../../store";
import { Search } from "./components/Search";
import { Gallery } from "./components/Gallery";


const HomePage: PageType = () => {
    const list = useSelector((state) => state.images.list);

    return (
        <div className="home-page">
            <div className="container">
                <Search isEmptyResults={list.length === 0}/>
                <Gallery images={list} isEmptyResults={list.length === 0}/>
            </div>

        </div>
    )
}
export default HomePage;