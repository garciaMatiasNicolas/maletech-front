import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import LogIn from './components/users/LogIn';
import SignUp from './components/users/SignUp';
import Main from './components/shop/Main';
import SellContainer from './components/sellers/SellContainer';
import { FetchProvider } from './components/context/Context';
import ProductDetail from './components/shop/ProductDetail';
import Profile from './components/users/Profile';

function App() {
  return (
    <FetchProvider>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Index/>} />
          <Route path ='/products' element={<Main/>} />
          <Route path ='/products/item/:id' element={<ProductDetail/>}/>
          <Route path ='/sell' element={<SellContainer/>} />
          <Route path ='/log-in' element={<LogIn/>} />
          <Route path ='/sign-up' element={<SignUp/>}/>
          <Route path ='/user/:id' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </FetchProvider>
  );
}

export default App;
