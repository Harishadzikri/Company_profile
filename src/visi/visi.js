import logo from '../img/logo.jpg';
import img from '../img/well2.png';
import React from 'react';
import './visi.css'



function Visi() {
    return(
        <>
        
  

  <div className='profil mt-10 pt-[80px]'>
        <div className="profiltentang_1">
        <img src={logo}  className='mr-36' alt="" height={200} width={200}/>
            <div className="kataa2">
            <h2 className='ml-20 text-4xl'>VISI</h2>
                <p className="kataa4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cum mollitia molestias, sequi praesentium fugiat a aspernatur aliquam, facere reprehenderit harum placeat libero animi beatae laudantium, quae pariatur voluptatem. Eius autem eum animi provident beatae ducimus nemo impedit praesentium atque?
                </p>
            </div>
        </div>
    </div>



  <div className='profil mb-50'>
        <div className="profiltentang_2">
        <img src={logo}  className='' alt="" height={200} width={200}/>
            <div className="kataa1">
            <h2 className='ml-4 text-4xl'>MISI</h2>
                <p className="kataa2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum cupiditate natus doloribus excepturi ipsum error quisquam tempore ex molestias expedita dignissimos libero ab suscipit voluptates cumque, minus atque debitis pariatur maiores molestiae dolorum! Explicabo ut maxime id nisi iusto similique et voluptatem obcaecati, expedita, architecto a harum doloribus alias nam fuga necessitatibus debitis libero, quidem error velit sed deserunt! Minima.
                </p>
            </div>
        </div>
    </div>

    <div className='profil mb-50'>
        <div className="profiltentang_2">
            <div className='flex flex-col'>
            <h2 className='ml-[60px] text-4xl'>SEJARAH</h2>
        <img src={img}  className='' alt="" height={350} width={350}/>
        </div>
            <div className="kataa1">
                <p className="kataa3 mt-7" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatum! Maiores amet nesciunt quas, cum rem libero nisi autem illum ex blanditiis similique voluptatibus ducimus sequi voluptate error neque corrupti quasi aperiam repellat omnis modi placeat ea laboriosam culpa? Fugit maiores dolor qui animi velit in tempora et illo inventore ea maxime odio aliquid illum suscipit consectetur vel explicabo commodi, dolorem nemo! Molestiae magnam voluptates perferendis nostrum nesciunt excepturi ut eaque suscipit possimus quia, asperiores modi magni impedit corrupti unde!
                </p>
            </div>
        </div>
    </div>
  </>

    );
}

export default Visi;