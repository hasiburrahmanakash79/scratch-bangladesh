import Achievement from "./Achievement";
import { useTranslation } from "react-i18next";
import './About.css'

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto p-3 mb:pt-40 pt-24">
      <div className="items-center grid-cols-3 gap-10 md:grid ">
        <div className="col-span-1">
          <img src="https://logos-world.net/wp-content/uploads/2023/08/Scratch-Emblem-500x281.png" 
          className="w-full"/>
        </div>
        <div className="text-center col-span-2 md:text-left">
          <h1 className="my-5 md:text-5xl text-3xl font-bold">
            {t("Scratch Bangladesh")}
          </h1>
          <p className="leading-8 md:text-lg text-sm">
            {t("Learning programming is popular among elementary school students Scratch Bangladesh is bringing a new way to do this. scratch A block-base programming language, along with Scratch for kids and teens Useful The world's largest programming community. using scratch Programming logic is very easy to learn and digital stories, animation videos,Games etc. projects can be created. Games, animations, presentations,Graphics art work, interactive stories etc. are of different types Everything needed to create a project is easily possible in Scratch. here Rather than writing code by typing on the keyboard like in other programming languages Using only blocks to perform tasks, learning from scratch is easier. Scratch.mit.edu website in more than 80 languages Programming can be done, but now in Bengali language as Bengali is added Coding is possible. Scratch Bangladesh on scratch in Bengali language Tutorials, Project Ideas, Courses etc. Various events throughout the year organizes Scratch Bangladesh is our country's primary school A new milestone for students, who are new to learning programming will open the door")}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <iframe
          className="iframe-responsive"
          src="https://www.youtube.com/embed/Bs4bNZRo28Q?si=1ZCkGRCcyNp8hHCy"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-10">
        <Achievement/>
      </div>
    </div>
  );
};

export default AboutUs;
