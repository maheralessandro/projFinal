

import Register from './componed/register';
import Login from './componed/login';
import { Route, Routes, useLocation } from 'react-router-dom';
import Product from './componed/registerProd';
import UserRoute from './privateRoutes/userRoute';
import AdminRoute from './privateRoutes/adminRoute';
import AdminDash from './pages/adminDashboard';
import AddProd from './componed/addProduct';
import Detail from './componed/detaille';
import ShoppingCart from './componed/shoppingCard';

import NavbarScroll from './componed/navbar';
import RegisterCat from './componed/registerCat';
import { getLocalStorage } from './helpers/localStorage';
import MyOrder from './componed/myOrder';
import UpdatePas from './componed/updatePass';
import UpdateProd from './componed/apdateProd';
import AllOrders from './componed/order';
import Footer from './componed/footer';


function App() {
  let user = getLocalStorage("User");
  let location = useLocation();
  return (
    <>
    <div className='app' style={{marginBottom:"100px"}}>
      {user?.role ==="user" || !location.pathname.includes('admin') ?
  <NavbarScroll />:null}
      

      <Routes>

        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
        

        <Route element={<UserRoute/>}>
        <Route path="/addProd" element={<AddProd/>}/>
        <Route path='/updateprod/:id' element={<UpdateProd/>}/>
        <Route path="/myOrders" element={<MyOrder/>}/>
        <Route path='/updatePwd' element={<UpdatePas/>}/>
        </Route>

        <Route element={<AdminRoute/>}>

         <Route path='/admin/*' element={<AdminDash/>}>
         <Route path='newCat' element={<RegisterCat/>}/>
         <Route index element={<Product/>}/>
         <Route path="newProd" element={<AddProd/>}/>
         <Route path="allOrders" element={<AllOrders/>}/>
        </Route>
        </Route>
      </Routes>
      
    
   
    </div>
    
    <Footer/>
    
    </>
  );
}

export default App;
