import './gallery.css'
import img1 from '../img/valorant.jpg'
import img2 from '../img/lol.jpg'
import img3 from '../img/tft.jpg'
import img4 from '../img/wildrift.png'
import { RiArrowDownSLine } from "react-icons/ri";


function Gallery() {
    return (
<div className='gallery-container'>
    <h1>Our Games</h1>
        <div className='gallery-row'>
            <div className='card1'>
            <img src={img4}/>
            
            </div>
            <div className='card1'>
            <img src={img2}/>
            
            </div>
        </div>
        <div className='gallery-row'>
            <div className='card1'>
            <img src={img3}/>
            
            </div>
            <div className='card1'>
            <img src={img1}/>
            </div>
        </div>
</div>












);
}

export default Gallery;