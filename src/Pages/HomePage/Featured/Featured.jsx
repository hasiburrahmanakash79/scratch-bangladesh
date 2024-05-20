import FeaturedCard from "./FeaturedCard";
import { useTranslation } from "react-i18next";

const Featured = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto md:mt-20 mt-10 p-3">
        <h1 className="my-3 md:text-5xl text-2xl text-center font-bold mb-14">
        {t("Featured Project")}
        </h1>
      <div className="md:grid grid-cols-4 gap-10">
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
      </div>
    </div>
  );
};

export default Featured;
