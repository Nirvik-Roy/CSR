import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './View/Register/Register';

// Import the React component
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
