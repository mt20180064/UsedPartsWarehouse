import logo from './logo.svg';
import './App.css';
import Index from './components/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Index/>} >
    <Route path="Home" ></Route>
    <Route path= "WebShop"></Route>
    
 
    
    </Route>
    

    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
