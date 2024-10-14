import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './View/Register/Register';
import Otp from './View/Otp/Otp';
import Login from './View/Login/Login';
import Country from './View/Country/Country';
import Mainlayout from './Mainlayout/Mainlayout';
import Generalinfo from './View/General/Generalinfo';
import SplashScreen from './View/SplashScreen/SplashScreen';

// Import the React component
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/country' element={<Country/>}></Route>
        <Route path='/' element={<Mainlayout/>}>
          <Route path='/generalinfo' element={<Generalinfo/>}></Route>
          <Route path='/splashscreen' element={<SplashScreen/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
