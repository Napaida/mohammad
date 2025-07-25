import Icon from "../../public/Icon.jsx/Icon"
import "../parsial/ProductNavbar.css"
import { ProdctTwo } from "./Main"
import { useParams } from "react-router-dom"
function ProductNavbar2(){
   const {id} = useParams()
        const Nav= ProdctTwo.find((item) => item.id ==id)
    return(
        <>
        <div className="header-product-list">
            <div className="header-product-p">
            <p className="header-productlist-p">Home <Icon action={'arrow-right'}/></p>
            <p className="header-productlist-p">Shop <Icon action={'arrow-right'}/></p>
            <p className="header-productlist-p">Men <Icon action={'arrow-right'}/></p>
            <p>{Nav.head}</p>
            </div>
        </div>
        </>
    )
}
export default ProductNavbar2