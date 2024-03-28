const AboutUs = () => {
  return (
    <div className="container mx-auto p-3 pt-24">
      <div className="items-center grid-cols-3 gap-10 md:grid ">
        <div className="col-span-1">
          <img src="https://scratchbangladesh.com/wp-content/uploads/2024/01/Scratch-Bangladesh-logo-with-picture.png" 
          className="w-full"/>
        </div>
        <div className="text-center col-span-2 md:text-left">
          <h1 className="my-5 md:text-5xl text-3xl font-bold">
            স্ক্র্যাচ বাংলাদেশ
          </h1>
          <p className="leading-7">
            প্রাথমিক বিদ্যালয়ের শিক্ষার্থীদের মধ্যে প্রোগ্রামিং শেখা জনপ্রিয়
            করার লক্ষ্যে একটি নতুন পথ স্ক্র্যাচ বাংলাদেশ নিয়ে আসছে। স্ক্র্যাচ
            একটি ব্লক ভিত্তিক প্রোগ্রামিং ভাষা, একই সাথে স্ক্র্যাচ শিশু-কিশোরদের
            উপযোগী বিশ্বের সবথেকে বড় প্রোগ্রামিং কমিউনিটি। স্ক্র্যাচ ব্যবহার করে
            প্রোগ্রামিং লজিক শেখা খুব সহজ হয় এবং ডিজিটাল গল্প, এনিমেশন ভিডিও,
            গেম ইত্যাদি প্রজেক্ট তৈরি করা যায়। গেম, এনিমেশন, প্রেজেন্টেশন,
            গ্রাফিক্স আর্ট ওয়ার্ক, মিথস্ক্রিয় গল্প ইত্যাদি বিভিন্ন ধরনের
            প্রজেক্ট তৈরি করতে যা প্রয়োজন সবকিছু স্ক্র্যাচে সহজেই সম্ভব। এখানে
            অন্যান্য প্রোগ্রামিং ভাষার মত কীবোর্ডে টাইপ করে কোড লিখতে হয় না, বরং
            শুধুমাত্র ব্লক ব্যবহার করে কাজ সম্পাদন করা যায়, এতে স্ক্র্যাচ শেখা
            সহজ হয়। বিশ্বের মোট ৮০ টির অধিক ভাষায় Scratch.mit.edu ওয়েবসাইটে
            প্রোগ্রামিং করা যায়, তবে বর্তমানে বাংলাকে যোগ করায় এখন বাংলা ভাষায়
            কোডিং করা সম্ভব। স্ক্র্যাচ বাংলাদেশ বাংলা ভাষায় স্ক্র্যাচের উপর
            টিউটোরিয়াল, প্রজেক্ট আইডিয়া, কোর্স ইত্যাদি বছরব্যাপী নানা অনুষ্ঠান
            আয়োজন করে থাকে। স্ক্র্যাচ বাংলাদেশ আমাদের দেশের প্রাথমিক বিদ্যালয়ের
            শিক্ষার্থীদের জন্য একটি নতুন মাইলফলক, যা প্রোগ্রামিং শেখার নতুন
            দ্বার উন্মোচন করবে
          </p>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <iframe
          width="80%"
          height="565"
          src="https://www.youtube.com/embed/Bs4bNZRo28Q?si=1ZCkGRCcyNp8hHCy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
