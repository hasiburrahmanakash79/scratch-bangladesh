import { useTranslation } from "react-i18next";
import PhotoGallery from "./PhotoGallery";

const Olympiad = () => {
  const { t } = useTranslation();

  return (
    <div className="container md:pt-40 pt-24 mx-auto p-3 md:text-lg text-sm">
      <div>
        <h1 className="text-center md:text-5xl pb-5 text-3xl font-bold">
          {t("Bangladesh Scratch Olympiad")}
        </h1>
        <p className="my-5">
          {t(
            "By learning Scratch, students can create games, animation videos and cartoons. Scratch programming does not require learning any coding. Scratch programming is available in more than 80 languages ​​in the world. Now Bengali language is also included in that list. As a result, coding can also be done in Bengali language with Scratch. This is a new milestone for Bengali language. Students need to know computer programming to be proficient in future technology fields.To this end the Government of Bangladesh has included programming education in the school curriculum. Scratch Olympiad is being organized in Bangladesh from 2023 to encourage students to learn programming through Scratch.  Students from 1st to 8th class can participate in total 3 categories in the competition."
          )}
        </p>
        <span className="font-bold">{t("Catagories Are:")}</span>
        <div className="ms-5">
          <li>
            {t("Category 1")} : {t("Class 1 to CLass 4")}
          </li>
          <li>
            {t("Category 2")}: {t("Class 5 and CLass 6")}
          </li>
          <li>
            {t("Category 3")} : {t("Class 7 and Class 8")}
          </li>
        </div>
        <p className="mt-5">
          {t(
            "Students in each category are specific on a particular story Create a game or animation project using some characters (Sprites) have to do In that case the story and the total are in question during the Olympiad The number of characters (Sprite) is mentioned."
          )}
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-5">
          {t("Previous Year Questions:")}
        </h1>
        <div className="items-center grid-cols-3 gap-10 md:grid my-7">
          <div className="col-span-2 mb-3 rounded-lg object-cover">
            <img
              className="rounded-lg shadow-lg"
              src="https://i.ibb.co/7x3Hpmm/scratchimage.jpg"
            />
          </div>
          <div className=" col-span-1 bg-blue-400  scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent p-5 overflow-y-auto md:h-[58vh]  rounded-lg space-y-4">
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2024 (Upcomming...)</h1>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <a
                href="https://drive.google.com/file/d/1irZJJC3QRJYDfvgO_OYrujK4Y_GOW-tX/view?usp=sharing"
                target="_blank"
              >
                Scratch Olympiad 2023
              </a>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <a href="" target="_blank">
                Scratch Olympiad 2022
              </a>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <a href="" target="_blank">
                Scratch Olympiad 2021
              </a>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <a href="" target="_blank">
                Scratch Olympiad 2020
              </a>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <a href="" target="_blank">
                Scratch Olympiad 2019
              </a>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <a href="" target="_blank">
                Scratch Olympiad 2018
              </a>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <a href="" target="_blank">
                Scratch Olympiad 2017
              </a>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <a href="" target="_blank">
                Scratch Olympiad 2016
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PhotoGallery />
      </div>
    </div>
  );
};

export default Olympiad;
