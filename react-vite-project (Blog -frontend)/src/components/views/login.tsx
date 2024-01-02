import React from "react";
import {Link} from "react-router-dom";

class Login extends React.Component<any,any>{
    render() {
        return(
            <section className={'flex justify-center items-center p-5'}>
                <div className={'w-fit p-24 border shadow-xl rounded-xl'}>

                    <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-24 m-auto'}/>

                    <div className={'text-2xl font-bold text-green-600 text-center mt-5'}>
                        Sign In
                    </div>

                    <div className={'mt-5 min-w-[300px]'}>

                        <label className={'block'} htmlFor={'email'}>Email<span className={'text-bold text-red-600'}>*</span></label>
                        <input className={'border-2 w-96 h-8 hover:bg-white'} type={'email'} placeholder={'email'} id={'email'}/>

                        <label className={'block'} htmlFor={'password'}>Password<span className={'text-bold text-red-600'}>*</span></label>
                        <input className={'border-2 w-96 h-8 hover:bg-white'} type={'email'} placeholder={'password'} id={'password'}/>

                    </div>

                    <div className={'text-center mt-5'}>
                        <button className={'main-btn bg-green-700 text-white font-bold rounded-md hover:scale-110 p-2 px-6'}>Sign In</button>
                    </div>

                    <div className={'text-center mt-5'}>
                        Do not have an account ? <Link to={'/signup'}><span className={'text-blue-600 underline'}>Sign in now</span></Link>
                    </div>

                </div>
            </section>
        );
    }
}
export default Login;