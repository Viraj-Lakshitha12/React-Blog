import Card from "../cards/card.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

interface Data {
    id: number,
    title: string,
    description: string
}

function Home(): JSX.Element {
    const [data, setData] = useState<Data[]>([]);

    const fetchData = (): void => {
        axios.get('http://localhost:8080/article?size=10&page=1').then(result => {
            console.log(result.data);
            setData(result.data.data);
        });
    }


    useEffect(() => {
        fetchData();
        console.log("Called");
    }, []);

    return (
        <div>
            <section>
                <div
                    className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'>
                    {data.map((r: Data) => (
                        <Card key={r.id} title={r.title} description={r.description}/>
                    ))}
                </div>
            </section>
        </div>
    );

}

export default Home;