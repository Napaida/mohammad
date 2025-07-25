import CommentDetail from "../parsial/CommentDetail"
import DownDetail from "../parsial/Downdetail"
import FirstNavbar from "../parsial/FirstNavbar"
import Footer from "../parsial/Footer"
import ProductNavbar from "../parsial/NavbarProduct"
import ProdductImage from "../parsial/ProductImage"
import ListProduct from "../parsial/ProductList"

function Detail(){
    // const {id}=useParams()
    // const result=Product.find((item)=>item.id == id)

    return(<>
    <FirstNavbar/>
    <ProductNavbar/>
    <ProdductImage/>
   <ListProduct/>
   <CommentDetail/>
   <DownDetail/>
    <Footer/>
    </>)
}
export default Detail