import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import RiderSignUp from './pages/RiderSignUp/RiderSignUp';
import AuthContextProvider from './context/AuthContextProvider';

function App() {
   return (
      <div className='App'>
         <AuthContextProvider>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/home' element={<Home />} />
               <Route path='/riderSignUp' element={<RiderSignUp />} />
            </Routes>
         </AuthContextProvider>
      </div>
   );
}

export default App;
