import { useLoaderData } from "react-router-dom";


const Instructor = () => {
    const data = useLoaderData()
    console.log(data)
    const{}=data;
    return (
        <div>
            
        </div>
    );
};

export default Instructor;