import Icon from '../../public/Icon.jsx/Icon'
import '../parsial/Main.css'
const Product = [
    { id: 1, title: 'T-SHIRT WITH TAPE DETAILS', image: '../../public/image/image7.png', price: '120', star: '4.5', imgstar: '../../public/image/star45.png' },
    { id: 2, title: 'SKINNY FIT JEANS', image: '../../public/image/image8.png', price: '240', star: '3.5', imgstar: '../../public/image/star35.png', off: '../../public/image/$260.png', ooff: '../../public/image/frame 42.png' },
    { id: 3, title: 'CHECKERED SHIRT', image: '../../public/image/image9.png', price: '180', star: '4.5', imgstar: '../../public/image/star45.png' },
    { id: 4, title: 'SLEEVE STRIPED T-SHIRT', image: '../../public/image/image10.png', price: '130', star: '4.5', imgstar: '../../public/image/star45.png', off: '../../public/image/$160.png', ooff: '../../public/image/frame 43.png' }
]
const ProdctTwo = [
    { id: 1, title: 'Vertical Striped Shirt', image: '../../public/image/1.png', price: '212', star: '5.0', imgstar: '../../public/image/star5.png', off: '../../public/image/$232.png', ooff: '../../public/image/20.png' },
    { id: 2, title: 'Courage Graphic T-shirt', image: '../../public/image/2.png', price: '145', star: '4.0', imgstar: '../../public/image/star4.png' },
    { id: 3, title: 'Loose Fit Bermuda Shorts', image: '../../public/image/3.png', price: '80', star: '3.0', imgstar: '../../public/image/star3.png' },
    { id: 4, title: 'Faded Skinny Jeans', image: '../../public/image/4.png', price: '210', star: '4.5', imgstar: '../../public/image/star45.png' }
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
                            <img src={item.image} alt="" />
                            <div className='info'>
                                <p className='title'>{item.title}</p>
                                <p className='star'><img src={item.imgstar} alt="" />{item.star}/5</p>
                                <p className='font'>${item.price}<img src={item.off} alt="" /><img src={item.ooff} alt="" /></p>
                            </div>
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
                {ProdctTwo.map((item)=>(
                    <>
                        <div className='two2'>
                            <div className='img2'>
                                <img src={item.image} alt="" />
                                <div className='info2'>
                                    <p className='title2'>{item.title}</p>
                                    <p className='star2'><img src={item.imgstar} alt="" />{item.star}/5</p>
                                    <p className='font2'>${item.price}<img src={item.off} alt="" /><img src={item.ooff} alt="" /></p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className='button2'>
                <button>View All</button>
            </div>  
            <div className='back2'>
                <img src={'../../public/image/back.png'} alt="" />
            </div>
        </div>

    )
}
export default First