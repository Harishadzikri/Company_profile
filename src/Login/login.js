import './login.css';
import img from './../img/riot.png'
import {Link} from 'react-router-dom'

function login(){
    return(
        <div className="wrap">
        <div className="box">
        <div className="content">
            <form>
            <div className="logo-wrap">
            <img
        className=""
        src={img}
        alt="First slide"
        />
            </div>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" required />
                <i className="fa-solid fa-user" />
                <span>Username</span>
              </div>
              <div className="input-box">
                <input type="password" required />
                <i className="fa-solid fa-lock" />
                <span>Password</span>
              </div>
              <div className="input-box">
              <Link to='/' className='activ'><input type="submit" defaultValue="Login"/></Link>
              </div>
              <div className="links">
                <a href="/register">Register</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      

    );
}
export default login;