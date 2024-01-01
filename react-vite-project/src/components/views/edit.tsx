import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class Edit extends React.Component<any,any>{
    state = {
        value: ""
    }

    render() {
        return (
            <section className={'px-28'}>

                <div className={'text-right mt-5'}>
                    <button className={'bg-green-500 px-6 p-2 rounded-md mr-1'}>Clear</button>
                    <button className={'bg-red-600 p-2 px-6 rounded-md ml-1'}>Publish</button>
                </div>

                <div className={'m-2'}>
                    <label htmlFor="title" className="block">
                        Title<span className="text-red-600 font-bold">*</span>
                    </label>
                    <input type="text" name="title" placeholder="title" id="title" className="border-2 min-w-[85vw] block mt-2"/>
                </div>


                <div className={'m-2 h-[610px]'}>
                    <ReactQuill className={'w-[85vw] h-[500px]'} theme="snow" value={this.state.value}
                                onChange={(e:any) => this.setState({value: e.target.value})}/>
                </div>

            </section>
        );
    }

}

export default Edit;