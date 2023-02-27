import './register.css';
import img from './../img/logo.jpg'

function register(){
    return(
        <div className="wrap">
        <div className="box">
        <div className="content">
            <form>
            <div className="logo-wrap">
            <img
        className="d-block w-100"
        src={img}
        alt="First slide"
        />
            </div>
            <h1>Register</h1>
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
                <input type="submit" defaultValue="Login" />
              </div>
              <div className="links">
                <a href="/login">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      

    );
}
export default register;