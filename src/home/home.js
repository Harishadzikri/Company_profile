import Navbars from '../nav/nav';
import Carousel from '../carousel/carousel';
import Cards from '../card/card';
import Gallery from '../Gallery/gallery';
import Produks from '../produk/produk';
import Tentang from '../tentang/tentang';
import Footer from '../footer/footer';


const Home = () => {
    return(
        <div>
            <Navbars/>
            <Carousel/> 
            <Cards/>
            <Gallery/>
            <Produks/>
            
            <Footer/>   
        </div>
    );
}

export default Home;