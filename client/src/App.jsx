import React, { useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/single";
import Write from "./pages/Write/Write";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={user ? <Home/> : <Register/>}/>
          <Route path='/login' element={user ? <Home/> : <Login/>}/>
          <Route path='/write' element={user ? <Write/> : <Register/>}/>
          <Route path='/settings' element={user ? <Settings/> : <Register/>}/>
          <Route path='/post/:postId' element={user ? <Single/> : <Register/>}/>
      </Routes>
    </>
  );
}

export default App;
