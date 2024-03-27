import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[url('https://projects-static.raspberrypi.org/pathways/assets/scratch-intro.png')] h-screen">
      <div className="p-5 lg:py-[195px] md:py-[160px] py-20 bg-blue-700 text-white bg-opacity-70 h-screen">
        <div className="container pt-14 mx-auto">
          <div className="flex-col justify-center items-center text-center">
            <h1 className="my-3 md:text-6xl text-4xl font-bold uppercase">
            স্ক্র্যাচ বাংলাদেশ
            </h1>
            <p className=" md:w-2/3 mx-auto p-5 text-2xl">
            আমরা দেশব্যাপী বাংলা ভাষায় প্রোগ্রামিংকে জনপ্রিয় করতে কাজ করে যাচ্ছি। বাংলা ভাষায় স্ক্র্যাচ এর উপর টিউটোরিয়াল, প্রজেক্ট আইডিয়া, কোর্স সহ বছরব্যাপী নানা আয়োজনের খবর স্ক্র্যাচ বাংলাদেশ ওয়েবসাইটে পাওয়া যাবে।
            </p>
            <div>
              <Link to="/classes">
                <button className="btn btn-warning mt-9">
                  Create Scratch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
