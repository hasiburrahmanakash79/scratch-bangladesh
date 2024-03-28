import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <div className="md:grid grid-cols-2 gap-10 container mx-auto p-3">
      <div className="my-10 bg-[#ededed] rounded-lg hover:shadow-lg hover:shadow-orange-400 border ">
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
                  Scratch tips and tricks
                </h1>
                <p>Categories: Scratch Premium</p>
                <p className="text-sm opacity-40">video tutorial | Paid</p>
              </div>
              <Link className=" btn text-xl btn-primary" to="/"> Start Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-[#ededed] rounded-lg hover:shadow-lg hover:shadow-orange-400 border ">
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
                  সবার জন্য স্ক্র্যাচ প্রোগ্রামিং
                </h1>
                <p>Categories: Scratch Basic</p>
                <p className="text-sm opacity-40">video tutorial | free</p>
              </div>
              <Link className=" btn text-xl btn-primary" to="/"> Start Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
