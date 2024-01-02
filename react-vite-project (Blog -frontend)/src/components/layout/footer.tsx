import React from "react";

class Footer extends React.Component<any, any>{
    render() {
        return(
            <footer className='bg-cyan-950 text-white p-5'>
                <img src="https://logodix.com/logo/1597040.png" alt="blog" className='w-[50px]'/>
                <ul className='mt-2'>
                    <li>Flower Road Colombo</li>
                    <li>+94 - 779871762</li>
                    <li>+94 - 779871762</li>
                    <li>info@blog.lk</li>
                </ul>
                <div className='mt-5 text-center'>Copyright © 2023 Blog LK</div>
            </footer>
        );
    }
}
export default Footer;