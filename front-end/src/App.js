

import Register from './componed/register';
import Login from './componed/login';
import { Route, Routes } from 'react-router-dom';
import Product from './componed/registerProd';
import UserRoute from './privateRoutes/userRoute';
import AdminRoute from './privateRoutes/adminRoute';
import AdminDash from './pages/adminDashboard';
import AddProd from './componed/addProduct';
import Detail from './componed/detaille';
// import ShoppingCart from './componed/shoppingCard';

import NavbarScroll from './componed/navbar';
import RegisterCat from './componed/registerCat';

function App() {
  return (
    <div className='app'>
      <NavbarScroll />
      {/* <ShoppingCart/> */}

      <Routes>

        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path='/' element={<Product/>}/>

        <Route element={<UserRoute/>}>
        <Route path="/addProd" element={<AddProd/>}/>
        </Route>

        <Route element={<AdminRoute/>}>

         <Route path='/admin/*' element={<AdminDash/>}>
         <Route path='addcat' element={<RegisterCat/>}/>
        </Route>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
