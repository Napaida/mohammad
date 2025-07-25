import { useState } from 'react'
import '../parsial/CommentDetail.css'
import Icon from '../../public/Icon.jsx/Icon'
const CommentDownDetail = [
    { id: 1, name: 'Samantha D.', description: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt.', star: '../../public/image/star45.png', celender: 'Posted on August 14, 2023' },
    { id: 2, name: 'Alex M.', description: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt', star: '../../public/image/star4.png', celender: 'Posted on August 15, 2023' },


]
const CommentDownDetail2 = [
    { id: 1, name: 'Olivia P.', description: '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. Its evident that the designer poured their creativity into making this t-shirt stand out.', star: '../../public/image/star4.png', celender: 'Posted on August 17, 2023' },
    { id: 2, name: 'Ethan R.', description: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designers touch in every aspect of this shirt.', star: '../../public/image/star35.png', celender: 'Posted on August 16, 2023' },

]
const CommentDownDetail3 = [
    { id: 1, name: 'Liam K.', description: '"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designers skill. Its like wearing a piece of art that reflects my passion for both design and fashion.', star: '../../public/image/star4.png', celender: 'Posted on August 18, 2023' },
    { id: 2, name: 'Ava H.', description: '"Im not just wearing a t-shirt; Im wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."', star: '../../public/image/star45.png', celender: 'Posted on August 19, 2023' }

]
function CommentDetail() {
    const [description, setDescription] = useState('des2')
    return (
        <>
            <div className="comment-detail-all">
                <div className="Comment-up-button">
                    <button onClick={() => setDescription('des')} className={`buuton ${description == 'des' ? 'btn-hover-des' : ''}`} id="button-comment">Product Details</button>
                    <button onClick={() => setDescription('des2')} className={`buuton ${description == 'des2' ? 'btn-hover-des' : ''}`} id='button-comment2'>Rating & Reviews</button>
                    <button onClick={() => setDescription('des3')} className={`buuton ${description == 'des3' ? 'btn-hover-des' : ''}`} id='button-comment3'>FAQs</button>
                </div>
            </div>
            <div className='comment-up-navbar'>
                <div className='navbar-comment'>
                    <p>All Reviews<span>(451)</span></p>
                </div>
                <div className="comment-navbar-option">
                    <p><Icon action={'option'} /></p>
                    <div className="comment-select-option">
                        <select name="" id="">
                            <option value="">Latest</option>
                            <option value="">New</option>
                        </select>
                    </div>
                    <button>Write a Review</button>
                </div>
            </div>
            <div className="comment-all-two">
                {CommentDownDetail.map((item) => (
                    <>
                        <div className="Comment-all">
                            <div className='comment-all-star'>
                                <img src={item.star} alt="" />
                                <p><Icon action={'advsnce'} /></p>
                            </div>
                            <div className="comment-all-name">
                                <p>{item.name}<Icon action={'greent'} /></p>
                            </div>
                            <div className="comment-all-description">
                                <p>{item.description}</p>
                            </div>
                            <div className="comment-all-celender">
                                <p>{item.celender}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className="comment-all-two">
                {CommentDownDetail2.map((item) => (
                    <>
                        <div className="Comment-all">
                            <div className='comment-all-star'>
                                <img src={item.star} alt="" />
                                <p><Icon action={'advsnce'} /></p>
                            </div>
                            <div className="comment-all-name">
                                <p>{item.name}<Icon action={'greent'} /></p>
                            </div>
                            <div className="comment-all-description">
                                <p>{item.description}</p>
                            </div>
                            <div className="comment-all-celender">
                                <p>{item.celender}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className="comment-all-two">
                {CommentDownDetail3.map((item) => (
                    <>
                        <div className="Comment-all">
                            <div className='comment-all-star'>
                                <img src={item.star} alt="" />
                                <p><Icon action={'advsnce'} /></p>
                            </div>
                            <div className="comment-all-name">
                                <p>{item.name}<Icon action={'greent'} /></p>
                            </div>
                            <div className="comment-all-description">
                                <p>{item.description}</p>
                            </div>
                            <div className="comment-all-celender">
                                <p>{item.celender}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className="comment-all-button">
                <button className='comment-all-button-1'>Load More Reviews</button>
            </div>
        </>
    )
}
export default CommentDetail