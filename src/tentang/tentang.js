import logo from '../img/riot.png';
import React from 'react';
import './tentang.css'


function Tentang() {
    return(
        <>
    <div className='profil mt-10 pt-[80px]' id='about'>
        <div className="profiltentang_1">
        <img src={logo}   alt="" height={200} width={200}/>
            <div className="kataa1">
            <h2 className='ml-4 text-4xl'>RIOT DEVELOPER</h2>
                <p className="kataa2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem, atque iure, amet architecto harum culpa ab eius magnam, quisquam porro ratione facilis nisi. Atque eius corrupti culpa a accusantium saepe incidunt velit officia repudiandae quo? Nulla, hic expedita? Id, veritatis doloribus laudantium officiis a praesentium explicabo est earum deleniti illo, sed sint? Quod, soluta. Reprehenderit tenetur neque repellendus totam omnis, harum sint aspernatur illo voluptates? Assumenda, et possimus dolorem dicta nemo consequatur nobis nam tempore rerum, cupiditate architecto porro.
                </p>
            </div>
        </div>
    </div>

   
  </>

    );
}

export default Tentang;