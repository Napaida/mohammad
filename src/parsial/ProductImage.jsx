import '../parsial/ProductNavbar.css'
function ProdductImage() {

    return (
        <>
            <div className="product-image-left">
                <button>
                    <img src={'../../public/image/leftproduct.png'} alt="" className='left-image-product-list'/>
                </button>
                <button>
                    <img src={'../../public/image/leftproduct2.png'} alt=""  className='left-image-product-list'/>
                </button>
                <button>
                    <img src={'../../public/image/leftproduct3.png'} alt="" className='left-image-product-list' />
                </button>
            </div>
        </>
    )
}
export default ProdductImage