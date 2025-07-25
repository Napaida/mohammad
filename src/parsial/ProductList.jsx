import { useParams } from "react-router-dom"
import { Product } from "../parsial/Main"
import Icon from "../../public/Icon.jsx/Icon"
import { useState } from "react"
import "./ProductNavbar.css"
import { useSelector, useDispatch } from "react-redux"
import { incerement, decrement , zero} from "../features/counter/counterSlice"
function ListProduct() {
    const [buy, setBuy] = useState('p')
    const [size, setSize] = useState('size3')
    const { id } = useParams()
    const result = Product.find((item) => item.id == id)
    const store = useSelector((store) => store.counter.counterValue)
    const dispatch = useDispatch()
    console.log(store);
    
    return (
        <>
            <div className="list-product">
                <div className="list-product-img">
                    <img src={result.image} alt="" />
                </div>
                <div className="list-product-mtn">
                    <div className="list-product-title">
                        <p>{result.title}</p>
                    </div>
                    <div className="list-product-star">
                        <img src={result.imgstar} alt="" />
                        <p>{result.star}<span>/5</span></p>
                    </div>
                    <div className="list-product-price">
                        <p>${result.price} <img src={result.off} alt="" /><img src={result.ooff} alt="" /></p>
                    </div>
                    <div className="list-product-des">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore minus eos, voluptates illum error placeat a tempora molestiae nisi. Laborum.</p>
                    </div>
                    <div className="list-product-button">
                        <p>Select Colors</p>
                        <div className="list-product-button2">
                            <button onClick={() => setBuy('p')} className={`button ${buy == 'p' ? 'buttonBuy' : ''}`} id="btn"><Icon action={`${buy == 'p' ? 'accept' : ''}`} /></button>
                            <button onClick={() => setBuy('x')} className={`button ${buy == 'x' ? 'buttonBuy' : ''}`} id="btn2"><Icon action={`${buy == 'x' ? 'accept' : ''}`} /></button>
                            <button onClick={() => setBuy('a')} className={`button ${buy == 'a' ? 'buttonBuy' : ''}`} id="btn3"><Icon action={`${buy == 'a' ? 'accept' : ''}`} /></button>
                        </div>
                    </div>
                    <div className="list-product-size">
                        <p>Choose Size</p>
                        <div className="list-product-size-button">
                            <button onClick={() => setSize('size1')} className={`button ${size == 'size1' ? 'selectSize' : ''}`} id="btn2-1">Small</button>
                            <button onClick={() => setSize('size2')} className={`button ${size == 'size2' ? 'selectSize' : ''}`} id="btn2-2">Medium</button>
                            <button onClick={() => setSize('size3')} className={`button ${size == 'size3' ? 'selectSize' : ''}`} id="btn2-3">Large</button>
                            <button onClick={() => setSize('size4')} className={`button ${size == 'size4' ? 'selectSize' : ''}`} id="btn2-4">X_Large</button>
                        </div>
                    </div>
                    <div className="list-product-number">
                        <div className="list-product-number1">
                            <p className="button-input-number"><button onClick={() =>  dispatch(decrement())} id="button-number">-</button>{store < 0 ? dispatch(zero()) : store} <button onClick={() => dispatch(incerement())} id="button-number2">+</button></p>
                            <button id="button-add-to-cart">Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
export default ListProduct