import { Routes, Route } from "react-router-dom";
import Navigation from "../components/NavBar/navigation";
import CategoryContainer from "../components/main-container/index";
import Shop from "../components/shop/index";
import SignIn from "../components/SignIn";

const RoutePage = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Navigation/>} >
            <Route index element={<CategoryContainer />}/>
            <Route path="shop" element={<Shop/>} />
            <Route path="signin" element={<SignIn/>} />
            </Route>
        
        </Routes>
        </>
    )
}

export default RoutePage;