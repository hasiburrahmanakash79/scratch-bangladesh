import CourseCard from "./CourseCard/CourseCard";
import Faq from "./FAQ/Faq";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import Tutorial from "./Tutorial/Tutorial";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Hero/>
            <Tutorial/>
            <Featured/>
            <CourseCard/>
            <Faq/>
        </div>
    );
};

export default Home;