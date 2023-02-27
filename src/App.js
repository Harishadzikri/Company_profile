import { Route, Routes } from 'react-router-dom';
import Login from './Login/login';
import Register from './register/register';
import Home from '../src/home/home';
import Home2 from './home2/home2';
import Home3 from './home3/home3';

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home2' element={<Home2/>}/>
      <Route path='/home3' element={<Home3/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    

   </div>
  );
}

export default App;
