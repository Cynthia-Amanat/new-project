import { Routes, Route} from "react-router-dom"
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Login from "./Pages/LogiIn/Login"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from "./Context/UserContext.js";
import {PasswordProvider} from "./Context/PasswordContext.js"
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import HomePage from "./Pages/Home/HomePage"
import "./App.css"

function App() {
  return (
    <>
    
    <GoogleOAuthProvider clientId={'996863169158-bkoif3l02h2lr01oj83vp7fq6gnn9lle.apps.googleusercontent.com'}>
    <AuthProvider>
    <PasswordProvider>
    <Routes>
    <Route element ={<Login/>} path="/Login" />
      <Route element ={<SignUp/>} path="/SignUp"/>
      <Route element={<ProtectedRoute/>}>
      
      <Route element ={<HomePage/>} path = "/" exact/>
      </Route>
    </Routes>
    </PasswordProvider>
    </AuthProvider>
    </GoogleOAuthProvider>
    
    </>
  );
}

export default App;
