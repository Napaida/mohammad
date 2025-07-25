import "../parsial/Header.css"
import { useState } from "react"
import Icon from "../../public/Icon.jsx/Icon"
function FirstNavbar(){
     const [remove, setRemove] = useState(true)
        function HandleRemove() {
            setRemove(false)
        }
    return(<>
     {remove && (

                <div className="first">
                    <span>Sign up and get 20% off to your first order.<a href="">Sign Up Now</a></span>
                    <button className="icon" onClick={HandleRemove}>
                        <Icon action={"error"} />
                    </button>

                </div>
            )}
               <div className="navbar">
                <div className="header">
                    <h3 className="bold"><Icon action={'shop'} /></h3>
                    {/* <div className="header-p"> */}
                    <select name="" id="" className="select">
                        <option value="">Shop</option>
                    </select>
                    <p>On Sale</p>
                    <p>New Arrivals</p>
                    <p>Brands</p>

                    {/* </div> */}
                    <div className="input">
                        <Icon action={"search"} />
                        <input type="text" placeholder="Search for products..." style={{border:'none'}}/>
                    </div>
                    <div className="basket">
                        <Icon action={"basket"} />
                        <Icon action={"account"} />
                    </div>
                </div>
            </div>
    </>)
}
export default FirstNavbar