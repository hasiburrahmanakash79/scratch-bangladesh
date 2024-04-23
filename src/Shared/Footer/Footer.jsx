import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="  bg-[#ededed] text-black ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-3 container mx-auto">
        <div>
          <span className="footer-title text-yellow-600">
            {t("Scratch Bangladesh")}
          </span>
          <p className="leading-7">
            {t(
              "We Are working to make programming popular country wide. You will find Scratch Programming Tutorials, Project Idea's, Courses and Many more news about Events on Scratch Programming in Scratch bangladesh Website."
            )}
          </p>
          <div className="flex justify-between items-center gap-3 mt-3">
            <a
              href="https://www.facebook.com/scratchbangladesh"
              target="_blank"
              rel="noreferrer"
              className="w-7"
            >
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="w-7"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="w-7"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
                alt=""
              />
            </a>
            <a
              href="https://www.youtube.com/@ScratchBangladesh"
              target="_blank"
              rel="noreferrer"
              className="w-7"
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/1384/1384060.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="md:ps-12">
          <span className="footer-title text-yellow-600">
            {t("Quick Links")}
          </span>
          <p className="link link-hover">{t("Home")}</p>
          <p className="link link-hover">{t("About us")}</p>
          <p className="link link-hover">{t("Olympiad")}</p>
          <p className="link link-hover">{t("Learn")}</p>
          <p className="link link-hover">{t("Blog")}</p>
        </div>
        <div>
          <span className="footer-title text-yellow-600">{t("Address")}</span>
          <p className="link link-hover">Level 12/758 <br /> Satmasjid Road <br />Dhaka 1209</p>
        </div>
        <div>
          <p className="footer-title text-yellow-600">{t("Contact Us")}</p>
          <p className="link link-hover">Call: +880 1998138861</p>
          <a className="link link-hover break-words">
            scratchbangladesh@gmail.com
          </a>
          <div className="md:flex items-center gap-1 mt-3">
            <label className="input input-bordered flex items-center gap-2 w-2/3">
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-warning">Send</button>
          </div>
        </div>
      </div>
      <div className="bg-[#dddcdc] text-center p-5">
        <p>Copyright © 2024 Scratch Bangladesh</p>
      </div>
    </footer>
  );
};

export default Footer;
