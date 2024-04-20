import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Tutorial = () => {
  const { t } = useTranslation();
  return (
    <div className="items-center grid-cols-2 gap-16 md:grid p-3 container pt-14 mx-auto">
      <div className="">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/Bs4bNZRo28Q?si=EahUPgogqkpxl7nI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="text-center md:text-left">
        <h1 className="my-3 md:text-6xl text-4xl font-bold">
          {t("Scratch Bangladesh")}
        </h1>
        <p className="my-5">
          {t("Scratch is a block-based programming language through which People of any age, from elementary school students Can easily learn programming logic and besides games, animation videos, art Various projects can be created. Scratch is used in more than 70 languages and more than 200 countries around the world. Since 2021, Scratch is also being used in Bengali language. Currently there is an offline desktop version of Scratch available in Bengali along with the main website and Scratch editor.")}
        </p>
        <div>
          <Link to="/classes">
            <button className="btn btn-warning mt-4">
              {t("Learn Scratch in Bangla")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
