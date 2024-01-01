import React from 'react';
import Home from "./components/views/home.tsx";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Login from "./components/views/login.tsx";
import Header from "./components/layout/header.tsx";
import Footer from "./components/layout/footer.tsx";
import Signup from "./components/views/signup.tsx";
import Edit from "./components/views/edit.tsx";


class App extends React.Component<any,any>{
   render(){
    return(
     <div>
         <BrowserRouter>
             <Header/>
             <Routes>
                 <Route path={"/"} element={<Home />}/>
                 <Route path={"/login"} element={<Login />}/>
                 <Route path={"/signup"} element={<Signup />}/>
                 <Route path={"/edit"} element={<Edit />}/>

             </Routes>
             <Footer/>
         </BrowserRouter>
     </div>
    );
   }
}

export default App
