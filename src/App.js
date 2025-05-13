
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import Protected from './components/protected';
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={
                        <Protected>
                            <Home/>
                        </Protected>
                          
          }/>
      </Routes>
    </div>
  );
}

export default App;
