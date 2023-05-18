import { Switch, Route } from "react-router"
import { HotelDetails } from "../Components/HotelDetails/Components/HotelDetails"
import Login from "../Components/Login/Login"
import Signup from "../Components/Login/Signup"
import { SearchPage } from "../Components/SearchPage/SearchPage"
import { Home } from "./Home"
import Orderlist from "../Components/Orderlist/Orderlist"

export const Routes = () => {

    return <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/orderlist">
                <Orderlist />
            </Route>
            <Route exact path="/search">
                <SearchPage />
            </Route>
            <Route path="/search/:id">
                <HotelDetails />
            </Route>
        </Switch>

    </>

}