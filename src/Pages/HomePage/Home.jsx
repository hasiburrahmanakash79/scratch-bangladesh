import Faq from "./FAQ/Faq";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import Tutorial from "./Tutorial/Tutorial";


const Home = () => {
    return (
        <div>
            <Hero/>
            <Tutorial/>
            <Featured/>
            <Faq/>
        </div>
    );
};

export default Home;