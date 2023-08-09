import {Route, Routes} from "react-router-dom";
import LoginPage from "./domain/login";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<LoginPage/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
        </Routes>
    )
}
