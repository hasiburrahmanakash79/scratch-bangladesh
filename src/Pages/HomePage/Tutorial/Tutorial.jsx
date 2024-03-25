import { Link } from "react-router-dom";

const Tutorial = () => {
  return (
    <div className="items-center grid-cols-2 gap-16 md:grid p-3 container pt-14 mx-auto h-screen">
      <div className="">
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/-lv3Y-YKS54?si=Rt2dgxA6l7oF1YQz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="text-center md:text-left">
        <h1 className="my-3 md:text-6xl text-4xl font-bold uppercase">
          স্ক্র্যাচ বাংলাদেশ
        </h1>
        <p className="my-5">
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
