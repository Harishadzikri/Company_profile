import './tim.css';
import img from '../img/logo.jpg'
import img2 from '../img/orang1.PNG'
import img3 from '../img/orang2.PNG'
import img4 from '../img/orang3.PNG'
import img5 from '../img/orang4.PNG'
import img6 from '../img/orang5.PNG'
import img7 from '../img/orang6.PNG'

function Tim(){
    return(
        <div className='tim-container'>
            <h1>Our team</h1>
             <div className='boleh'>

            <div className='gakmau'>
            <img src={img2}/>
            <div className="texting">
            <h2>Stevan</h2>
            <h5>Lorem ipsum dolor sit amet.
            </h5>   
            </div>
            </div>
            <div className='gakmau'>
            <img src={img3}/>
            <div className="texting">
            <h2>Ujang</h2>
            <h5>Lorem ipsum dolor sit amet.
            </h5>   
            </div>
            </div>
            <div className='gakmau'>
            <img src={img4}/>
            <div className="texting">
            <h2>Ucup</h2>
            <h5>Lorem ipsum dolor sit amet.
            </h5>   
            </div>
            </div>
            <div className='gakmau'>
            <img src={img5}/>
            <div className="texting">
            <h2>Farrel</h2>
            <h5>Lorem ipsum dolor sit amet.
            </h5>   
            </div>
            </div>
            <div className='gakmau'>
            <img src={img6}/>
            <div className="texting">
            <h2>Rembo</h2>
            <h5>Lorem ipsum dolor sit amet.
            </h5>   
            </div>
            </div>
            <div className='gakmau'>
            <img src={img7}/>
            <div className="texting">
            <h2>Bangjo</h2>
            <h5>Lorem ipsum dolor sit amet.
            </h5>   
            </div>
            </div>
            
            </div>

        </div>



    );








}


export default Tim