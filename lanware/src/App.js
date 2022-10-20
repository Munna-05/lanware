import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';


function App() {
 

  return (
    <div className="App">



     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home/:username' element={<Home/>}/>
      </Routes>
     </BrowserRouter>
   



    </div>
  );
}

export default App;
