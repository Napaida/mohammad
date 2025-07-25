import Comment from "../parsial/Comment"
import FirstNavbar from "../parsial/FirstNavbar"
import Footer from "../parsial/Footer"
import First from "../parsial/Main"
import Sign from "../parsial/Navbar"
// import { Route } from "react-router-dom"
import "../parsial/Header.css"
function Header(){

    return(
        <>
        <FirstNavbar/>
        <Sign/>
        <First/>
        <Comment/>
        <Footer/>
        </>
    )
}
export default Header