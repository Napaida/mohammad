import Icon from '../../public/Icon.jsx/Icon'
import {Link} from 'react-router-dom'
import '../parsial/Main.css'
export const Product = [
    { id: 1, title: 'T-SHIRT WITH TAPE DETAILS', image: '../../public/image/image7.png', price: '120', star: '4.5', imgstar: '../../public/image/star45.png' ,head:'T-shirts'},
    { id: 2, title: 'SKINNY FIT JEANS', image: '../../public/image/image8.png', price: '240', star: '3.5', imgstar: '../../public/image/star35.png', off: '../../public/image/$260.png', ooff: '../../public/image/frame 42.png' , head:'Pants'},
    { id: 3, title: 'CHECKERED SHIRT', image: '../../public/image/image9.png', price: '180', star: '4.5', imgstar: '../../public/image/star45.png' ,head:'Shirt'},
    { id: 4, title: 'SLEEVE STRIPED T-SHIRT', image: '../../public/image/image10.png', price: '130', star: '4.5', imgstar: '../../public/image/star45.png', off: '../../public/image/$160.png', ooff: '../../public/image/frame 43.png',head:'T-shirts' }
]
export const ProdctTwo = [
    { id: 1, title: 'Vertical Striped Shirt', image: '../../public/image/1.png', price: '212', star: '5.0', imgstar: '../../public/image/star5.png', off: '../../public/image/$232.png', ooff: '../../public/image/202.png',head:'Shirt' },
    { id: 2, title: 'Courage Graphic T-shirt', image: '../../public/image/2.png', price: '145', star: '4.0', imgstar: '../../public/image/star4.png',head:'T-shirts' },
    { id: 3, title: 'Loose Fit Bermuda Shorts', image: '../../public/image/3.png', price: '80', star: '3.0', imgstar: '../../public/image/star3.png',head:'Short' },
    { id: 4, title: 'Faded Skinny Jeans', image: '../../public/image/4.png', price: '210', star: '4.5', imgstar: '../../public/image/star45.png',head:'Pants' }
]
function First() {
    return (
        <div className="div">
            <div className="up">
                <p>NEW ARRIVALS</p>
            </div>
            <div className='product'>
                {Product.map((item) => (
                    <div className='product2'>
                        <div className='img'>
                            <Link to={`/product/${item.id}`} className='Link'>
                            <img src={item.image} alt="" />
                            <div className='info'>
                                <p className='title'>{item.title}</p>
                                <p className='star'><img src={item.imgstar} alt="" />{item.star}<span className='span'>/5</span></p>
                                <p className='font'>${item.price}<img src={item.off} alt="" /><img src={item.ooff} alt="" /></p>
                                
                            </div>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>

            <div className='button10'>
                <button>View All</button>
            </div>
            <p className='border'></p>
            <div className='up2'>
                <p>top selling</p>
            </div>
            <div className='two'>
                {ProdctTwo.map((item) => (
                    <>
                        <div className='two2'>
                            <div className='img2'>
                                <Link to={`/servic/${item.id}`} className='Link'>
                                <img src={item.image} alt="" />
                                <div className='info2'>
                                    <p className='title2'>{item.title}</p>
                                    <p className='star2'><img src={item.imgstar} alt="" />{item.star} <span className='span2'>/5</span></p>
                                    <p className='font2'>${item.price}<img src={item.off} alt="" /><img src={item.ooff} alt="" /></p>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className='button2'>
                <button>View All</button>
            </div>
            <div className='back2'>
                <div className='back-p'>
                    <p>BROWSE BY dress STYLE</p>
                </div>
                <div className='center-image'>
                    <img src={'../../public/image/leftone.png'} alt="" className='image-hover' />
                    <img src={'../../public/image/lefttwo.png'} alt="" className='image-hover'/>
                </div>
                <div className='center-image-2'>
                    <img src={'../../public/image/leftdown.png'} alt="" className='image-hover'/>
                    <img src={'../../public/image/rightdown.png'} alt="" className='image-hover'/>

                </div>
                {/* <img src={'../../public/image/back.png'} alt="" /> */}
            </div>
        </div>

    )
}
export default First