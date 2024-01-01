import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component<any, any>{
    render() {
       return(
           <header>
               <nav className='flex justify-between items-center bg-green-200 p-3 font-bold'>
                   <img src="https://logodix.com/logo/1597040.png" alt="blog" className='w-[50px]'/>
                   <ul className='flex gap-[4vw] text-bold'>
                       <li><Link to={'/'}>Articles</Link></li>
                       <li><Link to={'/my'}>Your Articles</Link></li>
                       <li><Link to={'/edit'}>Write new Article</Link></li>
                       <li><Link to={'/login'}> Create An Account / Login</Link></li>
                   </ul>
               </nav>
           </header>
       );
    }
}
export default Header;