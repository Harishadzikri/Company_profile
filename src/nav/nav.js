// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { FaSchool } from "react-icons/fa";
import {Link} from 'react-router-dom'
import './nav.css'
import img from './../img/riot.png'



function Navbars(){
    return(
    //   <Navbar bg="dark" variant="dark">
    //     <Container>
    //     <Navbar.Brand href="#home" className='fs-3'><FaSchool fontSize="35px" className='icon'/>SMKN 2</Navbar.Brand>
    //     <Nav className="me-auto fs-5">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#features">LMS</Nav.Link>      
    //       <Nav.Link href="#pricing">Adress</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <div className="navigation">
        <div className="company">
            <img src={img}/>
            <h1>Riot </h1>
        </div>
        <div className="option">
            <a href="/">Beranda</a>
            <a href="#">Visi</a>
            <a href="#">Misi</a>
            <a href="/home2">Tentang</a>
            <a href="/home3">Contact</a>
            <Link to='/login' className='active'>Log in</Link>
        </div>
    </div>
          
    );


}
export default Navbars;