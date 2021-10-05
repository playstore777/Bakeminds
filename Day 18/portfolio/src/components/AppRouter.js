import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./HomePage";
import Portfolio from "./PortfolioPage";
import PortfolioItemPage from "./PortfolioItemPage";
import Contact from "./Contact";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route
                        exact
                        path="/portfolio/:id"
                        component={PortfolioItemPage}
                    />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
