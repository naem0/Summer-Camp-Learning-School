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
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import PamentHistory from "../Pages/Dashboard/PamentHistory/PamentHistory";
import InstructoRoute from "./InstructoRoute";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorMyClass from "../Pages/Dashboard/InstructorMyClass/InstructorMyClass";
import UpdatClass from "../Pages/Dashboard/UpdatClass/UpdatClass";
import StudentEnrolClass from "../Pages/Dashboard/StudentEnrolClass/StudentEnrolClass";

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
          path: 'myclass', 
          element: <MyClass></MyClass>
        },
        {
          path: 'enrolclass', 
          element: <StudentEnrolClass></StudentEnrolClass>
        },
        {
          path:'payment/:id',
          element: <Payment></Payment>,
          loader: ({params}) => fetch(`http://localhost:5000/class/${params.id}`)
        },
        // Instructor routes 
        {
          path:'addclass',
          element: <InstructoRoute><AddClass></AddClass></InstructoRoute>
        },
        {
          path:'updatclass/:id',
          element: <InstructoRoute><UpdatClass></UpdatClass></InstructoRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/class/${params.id}`)
        },
        {
          path:'instructormyclass',
          element: <InstructoRoute><InstructorMyClass></InstructorMyClass></InstructoRoute>
        },
        // admin routes
        {
          path: 'adminhome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'pamenthistory',
          element: <PamentHistory></PamentHistory>
        },
        {
          path: 'allusers', 
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute></AdminRoute>
        },
        {
          path: 'manageclass',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        }
      ]
  }
  
]);