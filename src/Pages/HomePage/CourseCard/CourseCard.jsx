import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, CardHeader } from "@material-tailwind/react";
const CourseCard = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="md:text-5xl text-3xl text-center font-bold md:mt-20 mt-10 pb-10">
        {t("Courses")}
      </h1>
      <div className="md:grid grid-cols-2 gap-10 container mx-auto p-3">
        <Card className="overflow-hidden bg-slate-50 border p-4 hover:shadow-lg hover:shadow-orange-400">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <div className="relative h-64 rounded overflow-hidden">
              <img
                src="https://scratch.mit.edu/images/scratch-og.png"
                alt="{card.title}"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </CardHeader>
          <div className="md:flex justify-between items-center">
            <div className="text-center text-black md:text-left">
              <h1 className="my-3 md:text-xl text-lg font-semibold uppercase">
                {t("Scratch programming for everyone")}
              </h1>
              <p>
                {t("Categories")}: {t("Scratch Basic")}
              </p>
              <p className="text-sm opacity-40">
                {t("video tutorial")} | {t("Paid")}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Link className=" btn text-xl btn-primary " to="/">
                {t("Start Now")}
              </Link>
            </div>
          </div>
        </Card>
        <Card className="overflow-hidden md:mt-0 mt-5 bg-slate-50 border p-4 hover:shadow-lg hover:shadow-orange-400">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <div className="relative h-64 rounded overflow-hidden">
              <img
                src="https://www.learningresources.co.uk/media/home_uk/lruk-blog-images/What-is-Block-Coding-for-Kids_Header.jpg"
                alt="{card.title}"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </CardHeader>
          <div className="md:flex justify-between items-center">
            <div className="text-center text-black md:text-left">
              <h1 className="my-3 md:text-xl text-lg font-semibold uppercase">
                {t("Scratch programming for everyone")}
              </h1>
              <p>
                {t("Categories")}: {t("Scratch Basic")}
              </p>
              <p className="text-sm opacity-40">
                {t("video tutorial")} | {t("Paid")}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Link className=" btn text-xl btn-primary " to="/">
                {t("Start Now")}
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CourseCard;
