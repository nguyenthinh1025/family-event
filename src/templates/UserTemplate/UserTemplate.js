import { Route } from "react-router-dom";
import Viewers from "./Viewers/Viewers";
import Carousel from "./Carousel/Carousel";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import Footer from "./Footer/Footer";

export const UserTemplate = (props) => {
    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(routeProps) => {
        return <div className="super_container">
            {/* Header */}
            <Header />
            <Menu />
            {/* Home */}
            <Carousel />
            {/* Search */}
            <Search />
            {/* <Viewers /> */}
            <Component {...routeProps} />
            <Footer />
        </div>
    }} />
}