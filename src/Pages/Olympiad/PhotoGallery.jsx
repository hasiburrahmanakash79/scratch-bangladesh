const PhotoGallery = () => {
  return (
    <div className="">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
        <div className="">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src="https://besafenet.net/wp-content/uploads/2023/03/Results-page-banner.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-10 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="text-2xl font-semibold text-white group-hover:italic">
            Math Olympiad
          </h1>
          <p className="mb-3  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            2022
          </p>
          <button className="btn btn-warning">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
