import React from "react";

interface Props{
    title:string,
    content:string
}



class Card extends React.Component<Props, any>{
    render() {
        return (
            <div className='p-5 m-5 w-72 border-solid border-2'>
                <h1 className='text-2xl font-bold'>{this.props.title}</h1>
                <p className='my-4'>{this.props.content}</p>
                <button className='text-white bg-green-500 p-2'>Read more..</button>
            </div>
        );
    }
}
export default Card;