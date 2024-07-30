

import Register from './componed/register';
import Login from './componed/login';
import { Route, Routes } from 'react-router-dom';
import Product from './componed/registerProd';
import UserRoute from './privateRoutes/userRoute';
import AdminRoute from './privateRoutes/adminRoute';
import AdminDash from './pages/adminDashboard';
import AddProd from './componed/addProduct';
import Detail from './componed/detaille';
import ShoppingCart from './componed/shoppingCard';

function App() {
  return (
    <div>
      <ShoppingCart/>

      <Routes>

        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route element={<UserRoute/>}>
        <Route path="addProd" element={<AddProd/>}/>
        <Route path='/' element={<Product/>}/>
        </Route>

        <Route element={<AdminRoute/>}>
         <Route path='/admin' element={<AdminDash/>}/>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
