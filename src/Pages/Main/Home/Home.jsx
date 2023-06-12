import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import PopularClass from "./PopulaeClass/PopularClass";
import PopularInstator from "./PopularInstator/PopularInstator";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Gallery></Gallery>
            <PopularInstator></PopularInstator>
        </div>
    );
};

export default Home;