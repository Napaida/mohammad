import { useState } from "react"
import Icon from "../../public/Icon.jsx/Icon"
// import Rectangle2 from "../../public/image/Rectangle2.png"
function Sign() {
  

    return (
        <>
            
            <div className="all">

                <div className="type">
                    <h1 className="h1">FIND CLOTHES</h1>
                    <h1 className="h2">THAT MATCHES</h1>
                    <h1 className="h3">YOUR STYLE</h1>
                    <div className="type-p">
                        <p>Browse through our diverse range of meticulously crafted garments, designed</p>
                        <p> to bring out your individuality and cater to your sense of style.</p>
                    </div>
                    <button className="button">Shop Now</button>
                    <div className="number">
                        <div className="number-1">
                            <h2>200+</h2>
                            <p>International Brands</p>
                        </div>
                        <div className="number-2">
                            <h2>2,000+</h2>
                            <p>High-Quality Products</p>
                        </div>
                        <div className="number-3">
                            <h2>30,000+</h2>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="back">
                    <div className="image-big">
                        <Icon action={'big'} />
                    </div>
                    <div className="image-small">
                        <Icon action={'small'} />
                    </div>
                </div>
            </div>
            <div className="logo">
                <Icon action={'one'}/>
                <Icon action={'two'}/>
                <Icon action={'three'}/>
                <Icon action={'four'}/>
                <Icon action={'five'}/>
            </div>
        </>
    )
}
export default Sign
