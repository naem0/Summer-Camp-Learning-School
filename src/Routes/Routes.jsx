import {
  createBrowserRouter,
} from "react-router-dom";


import Home from "../Pages/Main/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Class from "../Pages/Main/Class/Class";
import Instructor from "../Pages/Main/Instructor/Instructor";
import PrivateRoute from "./PraviteRoute";
import Main from "../Lyout/Main";
import Dashboard from "../Lyout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "./AddClass/AddClass";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/class',
        element: <Class></Class>,
        loader:()=>fetch('http://localhost:5000/class')
      },
      {
        path: '/instructor',
        element: <Instructor></Instructor>,
        loader:()=>fetch('http://localhost:5000/instructor')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
      children: [
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'mycart', 
          element: <MyClass></MyClass>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        // admin routes
        {
          path: 'adminhome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'allusers', 
          element: <AllUsers></AllUsers>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddClass></AddClass></AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        }
      ]
  }
  
]);