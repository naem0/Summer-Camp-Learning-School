
import { useLoaderData} from "react-router-dom";
import ClassCard from "./ClassCard";


const Class = () => {
    const datas = useLoaderData();
    console.log(datas)
    

    
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {
                    datas.map(data =><ClassCard key={data._id} data={data}></ClassCard> )
                }
            </div>
        );
    };

    export default Class;