import { Link } from "react-router-dom";

const Tutorial = () => {
  return (
    <div className="items-center grid-cols-2 gap-10 md:grid container pt-14 mx-auto h-screen">
      <div className="">
        <img
          src="https://en.scratch-wiki.info/w/images/thumb/Not_Logged_On.PNG/800px-Not_Logged_On.PNG"
          className="rounded-xl"
          alt=""
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="my-3 md:text-6xl text-4xl font-bold uppercase">
          স্ক্র্যাচ বাংলাদেশ
        </h1>
        <p className="backdrop-blur-md">
          স্ক্র্যাচ (Scratch) হল একটি ব্লক ভিত্তিক প্রোগ্রামিং ভাষা যার মাধ্যমে
          প্রাথমিক বিদ্যালয়ের শীক্ষার্থী থেকে শুরু করে যে কোন বয়সের মানুষ খুব
          সহজেই প্রোগ্রামিং লজিক শিখতে পারে এবং গেইম, এনিমেশন ভিডিও, আর্ট ছাড়াও
          নানা রকম প্রজেক্ট তৈরি করাতে পারে। এতদিন বিশ্বের মোট ৮০ টির অধিক ভাষায়
          Scratch ওয়েবসাইটে প্রোগ্রামিং করা যেত
        </p>
        <div>
          <Link to="/classes">
            <button className="btn btn-warning mt-4">
            স্ক্র্যাচ শিখুন বাংলায়
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
