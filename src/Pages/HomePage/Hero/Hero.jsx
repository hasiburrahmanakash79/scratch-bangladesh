import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[url('https://erepublic.brightspotcdn.com/dims4/default/29e2808/2147483647/strip/false/crop/6240x3510+0+0/resize/1486x836!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2F3c%2Fb8%2F648d841e4c87b42abaec60d066d5%2Fstem-graphic-2.jpg')] max-w-screen-2xl mx-auto">
      <div className="p-5 lg:py-[210px] md:py-[160px] py-20 bg-black text-white bg-opacity-70 max-w-screen-2xl mx-auto">
        <div className="pt-14">
          <div className="flex-col justify-center text-center">
            <h1 className="my-3 md:text-6xl text-4xl font-bold">
              {t("Scratch Bangladesh")}
            </h1>
            <p className=" md:w-1/2 mx-auto p-5 leading-10 md:text-2xl text-xl">
              {t(
                "We Are working to make programming popular country wide. You will find Scratch Programming Tutorials, Project Idea's, Courses and Many more news about Events on Scratch Programming in Scratch bangladesh Website."
              )}
            </p>
            <div>
              <a
                href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                className="btn text-lg btn-warning mt-9"
              >
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
