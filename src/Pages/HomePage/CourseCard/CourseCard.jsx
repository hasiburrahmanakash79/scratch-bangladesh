import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const CourseCard = () => {
  const { t } = useTranslation();
  return (
    
<div>
<h1 className="my-3 md:text-5xl text-2xl text-center font-bold md:mt-20 mt-10">{t("Courses")}</h1>
    <div className="md:grid grid-cols-2 gap-10 container mx-auto p-3"> 
      <div className="my-10 bg-[#ededed] rounded-lg hover:shadow-lg hover:shadow-orange-400 border  transition duration-150 ease-in delay-200">
        <div className="p-5 text-white">
          <div className="items-center">
            <div className="">
              <img
                src="https://scratch.mit.edu/images/scratch-og.png"
                className=" rounded-xl"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-center text-black md:text-left">
                <h1 className="my-3 text-3xl font-semibold uppercase">
                  {t("Scratch tips and tricks")}
                </h1>
                <p>{t("Categories")}: {t("Scratch Premium")}</p>
                <p className="text-sm opacity-40">{t("video tutorial")} | {t("Paid")}</p>
              </div>
              <Link className=" btn text-xl btn-primary" to="/"> {t("Start Now")}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-[#ededed] rounded-lg hover:shadow-lg hover:shadow-orange-400 border  transition duration-150 ease-in delay-200">
        <div className="p-5 text-white">
          <div className="items-center">
            <div className="">
              <img
                src="https://scratch.mit.edu/images/scratch-og.png"
                className=" rounded-xl"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-center text-black md:text-left">
                <h1 className="my-3 text-3xl font-semibold uppercase">
                  {t("Scratch programming for everyone")}
                </h1>
                <p>{t("Categories")}: {t("Scratch Basic")}</p>
                <p className="text-sm opacity-40">{t("video tutorial")} | {t("Paid")}</p>
              </div>
              <Link className=" btn text-xl btn-primary" to="/">{t("Start Now")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default CourseCard;
