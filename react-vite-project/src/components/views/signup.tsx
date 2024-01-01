import React from "react";
import {Link} from "react-router-dom";

class Signup extends React.Component<any,any>{
    render(){
        return (
            <section className={'flex justify-center items-center p-3'}>
                <div className={'w-fit p-24 border shadow-xl rounded-xl'}>

                    <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-24 m-auto'}/>

                    <div className={'text-2xl font-bold text-green-600 text-center mt-5'}>
                        Sign up
                    </div>

                    <div className={'mt-5 min-w-[300px] flex'}>
                        <div className={'p-2'}>
                            <label className={'block'} htmlFor={'fName'}>First Name<span
                                className={'text-bold text-red-600'}>*</span></label>
                            <input className={'border-2 border-green-300 hover:bg-white'} type={'text'} placeholder={'First Name'}
                                   id={'fName'}/>
                        </div>

                        <div className={'p-2'}>
                            <label className={'block'} htmlFor={'lname'}>Last Name<span
                                className={'text-bold text-red-600'}>*</span></label>
                            <input className={'border-2 border-green-300 hover:bg-white'} type={'text'} placeholder={'Last Name'}
                                   id={'lName'}/>
                        </div>
                    </div>

                    <div className={'p-2 '}>
                        <label className={'block'} htmlFor={'userName'}>User Name<span
                            className={'text-bold text-red-600'}>*</span></label>
                        <input className={'border-2 border-green-300 w-96 h-8 hover:bg-white'} type={'text'} placeholder={'Enter User Name'}
                               id={'userName'}/>
                    </div>

                    <div className={'p-2 min-w-[300px]'}>

                        <label className={'block'} htmlFor={'email'}>Email<span
                            className={'text-bold text-red-600'}>*</span></label>
                        <input className={'border-2 border-green-300 w-96 h-8 hover:bg-white'} type={'email'} placeholder={'Enter Email'}
                               id={'email'}/>
                    </div>

                    <div className={'p-2 min-w-[300px]'}>
                        <label className={'block'} htmlFor={'password'}>Password<span
                            className={'text-bold text-red-600'}>*</span></label>
                        <input className={'border-2 border-green-300 w-96 h-8 hover:bg-white'} type={'email'} placeholder={'Enter Password'}
                               id={'password'}/>

                    </div>

                    <div className={'text-center mt-5'}>
                        <button
                            className={'main-btn bg-green-700 text-white font-bold rounded-md hover:scale-110 p-2 px-6'}>Sign
                            Up
                        </button>
                    </div>

                    <div className={'text-center mt-5'}>
                        Do have an account? <Link to={'/login'}><span
                        className={'text-blue-600 underline'}>Sign In now</span></Link>
                    </div>

                </div>
            </section>
        );
    }
}

export default Signup;