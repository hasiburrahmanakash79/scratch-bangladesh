import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <div className="container mx-auto mt-20 p-3">
        <h1 className="my-3 md:text-5xl text-2xl text-center font-bold mb-10">
        ফিচার্ড প্রজেক্ট
        </h1>
      <div className="md:grid grid-cols-4 gap-10">
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
      </div>
    </div>
  );
};

export default Featured;
