import Icon from "../../public/Icon.jsx/Icon"
import '../parsial/DownDetail.css'
const DownProduct=[
    {id:1,title:'Polo with Contrast Trims',image:'../../public/image/blue.png',star:'4.0',price:'212',off:'../../public/image/242.png',ooff:'../../public/image/24220.png',imgstar:'../../public/image/star4.png'},
    {id:2,title:'Gradient Graphic T-shirt',image:'../../public/image/wihte.png',star:'3.5',price:'145',imgstar:'../../public/image/star35.png'},
    {id:3,title:'Polo with Tipping Details',image:'../../public/image/sor.png',star:'4.5',price:'180',imgstar:'../../public/image/star45.png'},
    {id:4,title:'Black Striped T-shirt',image:'../../public/image/black.png',star:'5.0',price:'120',off:'../../public/image/150.png',ooff:'../../public/image/15030.png',imgstar:'../../public/image/star5.png'},
]
function DownDetail(){

    return(
        <>
        <div className="div">
            <div className="up-2-1">
                <p>You might also like</p>
            </div>
            <div className='product'>
                {DownProduct.map((item) => (
                    <div className='product2'>
                        <div className='img'>
                            <img src={item.image} alt="" />
                            <div className='info'>
                                <p className='title'>{item.title}</p>
                                <p className='star'><img src={item.imgstar} alt="" />{item.star}<span className='span'>/5</span></p>
                                <p className='font'>${item.price}<img src={item.off} alt="" /><img src={item.ooff} alt="" /></p>
                                
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        
        </>
    )
}
export default DownDetail