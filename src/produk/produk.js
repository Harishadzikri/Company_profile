import './produk.css';
import { BsChevronCompactDown } from "react-icons/bs";
import img from '../img/jual1.jpg';
import img1 from '../img/jual2.jpg';
import img2 from '../img/jual3.jpg';
import img3 from '../img/jual4.jpg';


import React from 'react';


function Produks() {
    return(
            < div className='cart'>
                <div className='produk'>
                <div className="product">
                    <div className="foto">
                    <img src={img} alt="" />
                    </div>
                    <div className="desc-prod">
                        <h1>Tailung Action figure</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat, quasi ex quidem quas soluta.</p>
                        <a href="#">Only 15$</a>
                    </div>
                </div>
                <div className="product">
                    <div className="foto">
                    <img src={img1} alt="" />
                    </div>
                    <div className="desc-prod">
                        <h1>Tifani Action figure</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat, quasi ex quidem quas soluta.</p>
                        <a href="#">Only 15$</a>
                    </div>
                </div>
                <div className="product">
                    <div className="foto">
                    <img src={img2} alt="" />
                    </div>
                    <div className="desc-prod">
                        <h1>Azazel Action figure</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat, quasi ex quidem quas soluta.</p>
                        <a href="#">Only 15$</a>
                    </div>
                </div>
                <div className="product">
                    <div className="foto">
                    <img src={img3} alt="" />
                    </div>
                    <div className="desc-prod">
                        <h1>Phoenix Action figure</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat, quasi ex quidem quas soluta.</p>
                        <a href="#">Only 15$</a>
                    </div>
                </div>
                </div> 
                <BsChevronCompactDown className='arrowdown'/>             
            </div>
            
      
            );
    }
export default  Produks;