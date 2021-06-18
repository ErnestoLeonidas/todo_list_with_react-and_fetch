import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

export default function Layout(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}