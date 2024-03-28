const FeaturedCard = () => {
  return (
    <div className="border bg-[#f2f2f2] p-4 hover:shadow-xl hover:border-2 shadow rounded-md mb-5">
      <div className="">
        <div className="w-full rounded">
          <img src="https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/10/Screen-Shot-2022-10-11-at-1.40.36-PM.png" />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-md font-semibold">
          তৈরি করেছে: Mustafizur Rahman
        </h1>
        <p className="text-md">
          স্ক্র্যাচ প্রোফাইল: <span className="link-primary">Musta12221</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
