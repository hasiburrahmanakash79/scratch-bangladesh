import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import Tutorial from "./Tutorial/Tutorial";


const Home = () => {
    return (
        <div>
            <Hero/>
            <Tutorial/>
            <Featured/>
        </div>
    );
};

export default Home;