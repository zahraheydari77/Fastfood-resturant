import Home from "./Pages/Home/Home";
import Menu from './Pages/Menu/Menu'
import Contact from "./Pages/Contact/Contact";
import Login from './Pages/Login/Login'
import SignIn from './Pages/SignIn/SignIn'


const routes = [
    {path:'/', element:<Home/>},
    {path:'/menu' , element:<Menu/>},
    {path:'/contact' , element:<Contact/>},
    {path:'/login' , element:<Login/>},
    {path:'/signin' , element:<SignIn/>},


];

export default routes;