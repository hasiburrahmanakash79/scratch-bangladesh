import { useTranslation } from "react-i18next";


const Hero = () => {

  const { t } = useTranslation();
  return (
    <div className="bg-[url('https://projects-static.raspberrypi.org/pathways/assets/scratch-intro.png')] max-w-screen-2xl mx-auto">
      <div className="p-5 lg:py-[195px] md:py-[160px] py-20 bg-blue-700 text-white bg-opacity-70 max-w-screen-2xl mx-auto">
        <div className="pt-14">
          <div className="flex-col justify-center text-center">
            <h1 className="my-3 md:text-6xl text-4xl font-bold">
            {t("Scratch Bangladesh")}
            </h1>
            <p className=" md:w-2/3 mx-auto p-5 text-2xl">
            {t("We Are working to make programming popular country wide. You will find Scratch Programming Tutorials, Project Idea's, Courses and Many more news about Events on Scratch Programming in Scratch bangladesh Website.")}</p>
            <div>
                <a href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" className="btn btn-warning mt-9">
                {t("Create Scratch")}
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
