import { useState } from "react"
import Icon from "../../public/Icon.jsx/Icon"
import "../parsial/Footer.css"
function Footer() {
    const [active, setActive] = useState(false)
 

   
    return (
        <>
            <div className="footer-all">
                <div className="footer-up">
                    <p>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
                    <div className="footer-up-button">
                        <div className="footer-input">
                            <Icon action={'email'} /><input type="text" placeholder="Enter your email address" />
                        </div>
                        <button>Subscribe to Newsletter</button>
                    </div>
                </div>
                <div className="footer-down">
                    <div className="footer-1">
                        <p className="footer-shop">SHOP.CO</p>
                        <p className="footer-p">We have clothes that suits your style and which you re proud to wear. From women to men.</p>
                        <div className="footer-button">
                            <button onClick={()=>setActive('y')} className={`button ${active =='y' ?'active':''}`}><Icon action={`${active == 'y' ? 'yaho2' : 'yaho'}`} /></button>
                            <button onClick={()=>setActive('b') }className={`button ${active == 'b' ? 'active' : ''}`} ><Icon action={`${active == 'b'? 'facebook2':'facebook'}`} /></button>
                            <button onClick={()=>setActive('c')}className={`button ${active == 'c' ? 'active' : ''}`}  ><Icon action={`${active == 'c' ? 'insta2' : 'insta'}`} /></button>
                            <button onClick={()=>setActive('f')} className={`button ${active == 'f'? 'active' : ''}`}><Icon action={`${active=='f' ? 'air2' : 'air'}`} /></button>
                        </div>
                    </div>
                    <div className="footer-2">
                        <p className="footer-first">Company</p>
                        <p className="footer-fade">About</p>
                        <p className="footer-fade">Features</p>
                        <p className="footer-fade">Works</p>
                        <p className="footer-fade">Career</p>
                    </div>
                    <div className="footer-3">
                        <p className="footer-first">HELP</p>
                        <p className="footer-fade">Customer Support</p>
                        <p className="footer-fade">Delivery Details</p>
                        <p className="footer-fade">Terms & Conditions</p>
                        <p className="footer-fade">Privacy Policy</p>
                    </div>
                    <div className="footer-4">
                        <p className="footer-first">FAQ</p>
                        <p className="footer-fade">Account</p>
                        <p className="footer-fade">Manage Deliveries</p>
                        <p className="footer-fade">Orders</p>
                        <p className="footer-fade">Payments</p>
                    </div>
                    <div className="footer-5">
                        <p className="footer-first">RESOURCES</p>
                        <p className="footer-fade">Free eBooks</p>
                        <p className="footer-fade">Development Tutorial</p>
                        <p className="footer-fade">How to - Blog</p>
                        <p className="footer-fade">Youtube Playlist</p>
                    </div>
                </div>
            </div>
            <div className="footer-create">

                <div className="footer-down1">
                    <div className="footer-down2">
                        <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    </div>
                    <div className="footer-down3">
                        <img src={'../../public/image/footer.png'} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer