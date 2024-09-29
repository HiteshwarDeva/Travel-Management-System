import Login from './Login';
import Signin from './Signin';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Carousel from 'react-bootstrap/Carousel';
import Home from './Components/Homepage';
import Bookingspage from './Components/BookingsPage';
import HotelSearch from './Components/HotelSearch';
import TrainList from './Components/Trains';
import PNRStatusChecker from './Components/PNRStatus';
import Feed from './Components/Feed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signin/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/bookings' element={<Bookingspage/>}></Route>
        <Route path='/hotels' element={<HotelSearch/>}></Route>
        <Route path='/trains' element={<TrainList/>}></Route>
        <Route path='/checkpnr' element={<PNRStatusChecker/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
