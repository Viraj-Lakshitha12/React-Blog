import React from "react";
import Card from "../cards/card.tsx";

interface Data{
    id:number,
    title:string,
    content:string
}

const data :Data[]=[
    {
        id:1,
        title:"Learn Typescript",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
        id:2,
        title:"Learn JavaScript",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
        id:3,
        title:"Learn Java",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
        id:4,
        title:"Learn React",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
        id:5,
        title:"Learn Spring",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
        id:6,
        title:"Learn Mysql",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
    {
        id:7,
        title:"Learn JavaScript",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
    },
]

class Home extends React.Component<any,any>{
    render() {
        return (
            <div>
                <section>
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'>
                        {
                            data.map((r: Data) => {
                                return <Card title={r.title} content={r.content} />
                            } )
                        }
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;