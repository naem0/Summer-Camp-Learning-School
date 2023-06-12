
import { useLoaderData } from "react-router-dom";
import ClassCard from "./ClassCard";


const Class = () => {
    const datas = useLoaderData();
    console.log(datas)



    return (
        <div className="pt-32 mb-10">
            <h1 className="text-center mb-12 text-4xl text-slate-600 font-bold">All Class</h1>
            <div className=" flex gap-12 justify-center mb-12 text-center md:w-2/3 lg:w-1/2 mx-auto text-slate-800 font-semibold">
                <p>
                    Unlock the Joy of Learning! Explore our vast collection of educational toys designed to engage young minds and make learning fun.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    datas.map(data => <ClassCard key={data._id} data={data}></ClassCard>)
                }
            </div>
        </div>

    );
};

export default Class;