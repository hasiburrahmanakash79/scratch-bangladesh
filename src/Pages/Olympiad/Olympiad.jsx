import PhotoGallery from "./PhotoGallery";

const Olympiad = () => {
  return (
    <div className="container pt-28 mx-auto ">
      <div>
        <h1 className="text-center md:text-5xl text-3xl font-bold">
          বাংলাদেশ স্ক্র্যাচ অলিম্পিয়াড
        </h1>
        <p className="my-5">
          স্ক্র্যাচ শেখার মাধ্যমে শিক্ষার্থীরা গেম, অ্যানিমেশন ভিডিও এবং কার্টুন
          তৈরি করতে পারে। স্ক্র্যাচ প্রোগ্রামিং করতে কোন কোডিং শিখতে হয় না।
          বিশ্বের মোট ৮০টির অধিক ভাষায় স্ক্র্যাচ প্রোগ্রামিং করার যায়। এখন বাংলা
          ভাষাও সেই তালিকায় যুক্ত আছে। ফলে স্ক্র্যাচ দিয়ে বাংলা ভাষায়ও কোডিং করা
          যায়। এটি বাংলা ভাষার জন্য এক নতুন মাইলফলক। ভবিষ্যতে প্রযুক্তি ক্ষেত্রে
          দক্ষতার জন্য শিক্ষার্থীদের কম্পিউটার প্রোগ্রামিং জানা আবশ্যক। এই
          লক্ষ্যে বাংলাদেশ সরকার স্কুলের পাঠ্যসূচিতে প্রোগ্রামিং শিক্ষাকে
          অন্তর্ভূক্ত করেছে। শিক্ষার্থীদেরকে স্ক্র্যাচ এর মাধ্যমে প্রোগ্রামিং
          শিক্ষায় আরও উৎসাহী করার লক্ষে ২০২৩ সাল থেকে বাংলাদেশে স্ক্র্যাচ
          অলিম্পিয়াড আয়োজন করা হচ্ছে। <br /> প্রতিযোগিতায় ১ম থেকে ৮ম শ্রেণী
          পর্যন্ত শিক্ষার্থীরা মোট ৩ টি ক্যাটাগরিতে অংশ নিতে পারে।
        </p>
        <span className="font-bold">ক্যাটাগরি গুলি হল:</span>
        <div className="ms-5">
          <li>ক্যাটাগরি ১ : ১ম থেকে ৪র্থ শ্রেণী</li>
          <li>ক্যাটাগরি ২ : ৫ম ও ৬ষ্ঠ শ্রেণী</li>
          <li>ক্যাটাগরি ৩ : ৭ম ও ৮ম শ্রেণী</li>
        </div>
        <p className="mt-5">
          প্রতিটি ক্যাটাগরির শিক্ষার্থীদের একটি নির্দিষ্ট গল্পের উপর নির্দিষ্ট
          কিছু চরিত্র (Sprite) ব্যবহার করে একটি গেইম অথবা এনিমেশন প্রজেক্ট তৈরি
          করতে হয়। সেক্ষেত্রে অলিম্পিয়াডের সময় প্রশ্নের মধ্যে গল্প ও মোট
          চরিত্রের (Spite) সংখ্যা উল্লেখ করা থাকে।
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-5">বিগত বছরের প্রশ্ন:</h1>
        <div className="items-center grid-cols-3 gap-10 md:grid my-7">
          <div className="col-span-2">
            <img src="https://i.ytimg.com/vi/jWjNNdrype8/maxresdefault.jpg" />
          </div>
          <div className=" col-span-1 bg-blue-400 h-full p-5 rounded-lg space-y-4">
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2010</h1>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2011</h1>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2012</h1>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2013</h1>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2014</h1>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2015</h1>
            </div>

            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2016</h1>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2017</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-3xl font-bold my-5">Olympiad champions:  </h1>
        <div className="items-center grid-cols-3 gap-10 md:grid my-7">
          <div className="col-span-2 bg-blue-400 p-5 rounded-lg ">
            <div className="p-2 bg-white rounded-md shadow-lg">
              <h1>All Year Olympiad winner. <span className="text-blue-600 link link-hover">Download list</span> </h1>
            </div>
          </div>
          <div className=" col-span-1 h-full">
            <h1>Some Ads</h1>
          </div>
        </div>
      </div>
      <div >
      <div className="my-10">
      <h1 className="text-3xl font-bold mb-7">Olympiad Photo Gallery: </h1>
        <div className="grid grid-cols-4 gap-5 ">
        <PhotoGallery/>
        <PhotoGallery/>
        <PhotoGallery/>
        <PhotoGallery/>
        <PhotoGallery/>
        <PhotoGallery/>
        <PhotoGallery/>
        <PhotoGallery/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Olympiad;
