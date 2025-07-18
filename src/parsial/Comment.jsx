import { useState } from "react"
import Icon from "../../public/Icon.jsx/Icon"
import '../parsial/Comment.css'
const CommentShow = [
    { id: 1, star: '../../public/image/star10.png', name: 'Ramin H.', icon: '../../public/image/tik.png', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat culpa ullam voluptate excepturi vel dolores architecto, iste sit cupiditate inventore unde optio odit omnis molestias aliquid recusandae veritatis ex!' },
    { id: 2, star: '../../public/image/star10.png', name: 'Sarah M.', icon: '../../public/image/tik.png', title: 'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I ve bought has exceeded my expectations' },
    { id: 3, star: '../../public/image/star10.png', name: 'Alex K.', icon: '../../public/image/tik.png', title: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”' },
    { id: 4, star: '../../public/image/star10.png', name: 'James L.', icon: '../../public/image/tik.png', title: 'As someone who s always on the lookout for unique fashion pieces, I m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.' },
    { id: 5, star: '../../public/image/star10.png', name: 'Mohammad H.', icon: '../../public/image/tik.png', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat culpa ullam voluptate excepturi vel dolores architecto, iste sit cupiditate inventore unde optio odit omnis molestias aliquid recusandae veritatis ex!' },
]

function Comment() {
  const [slide , setSlide] = useState(null)
    // function LeftHandle(){
    //     setSlide((item)=>{
    //         item === item.length -1 ? 0 : item.length +1
    //     })
    // }

    return (
        <>
            <div className="head">
                <p>OUR HAPPY CUSTOMERS</p>
                <div className="button3">
                    <button onClick={()=>setSlide()}><Icon action={'left'} /></button>
                    <button><Icon action={'right'} /></button>
                </div>
            </div>
            <div className="map">
                {CommentShow.map((item) => (
                    <>
                        <div className="border1">
                            <div className="to">
                                <img src={item.star} alt="" className="img1" />
                                <p className="name">{item.name}<img src={item.icon} alt="" className="img3" /></p>
                                <p className="matn">{item.title}</p>
                            </div>
                        </div>
                    </>
                
                ))}
            </div>
        </>
    )
}
export default Comment