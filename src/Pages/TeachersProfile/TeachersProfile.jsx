import FeaturedCard from "../HomePage/Featured/FeaturedCard";

const TeachersProfile = () => {
  return (
    <div className="pt-20 bg-blue-400">
      <div className=" p-5 container mx-auto">
        <div className="md:grid grid-cols-3 gap-10">
          <div className="bg-white rounded-xl p-10 col-span-1 flex flex-col justify-center items-center">
            <div className="avatar">
              <div className="w-36 rounded-full ring ring-slate-500 ring-offset-base-100 ring-offset-2">
                <img src="https://steamdaily.com/wp-content/uploads/2019/05/bill-gates-profile-pic.jpg" />
              </div>
            </div>
            <div className="mt-6 space-y-1 text-center">
              <h1 className="text-xl font-bold">Faisal Ahmed Siam</h1>
              <p>Assistant Teacher</p>
              <p>Scratch ID: As-12334743292</p>
              <p>Gender: Male</p>
            </div>
          </div>
          <div className="col-span-2 mt-5">
            <div className="p-5 bg-white rounded-xl ">
              <h1 className="text-xl font-bold">General Information</h1>
              <table className="table border">
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>siamahmed12@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>:</td>
                    <td>+880 12932623</td>
                  </tr>
                  <tr>
                    <td>Institute</td>
                    <td>:</td>
                    <td>Khulna Zilla School </td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>:</td>
                    <td>Govt. School</td>
                  </tr>
                  <tr>
                    <td>Division</td>
                    <td>:</td>
                    <td>Khulna</td>
                  </tr>
                  <tr>
                    <td>District</td>
                    <td>:</td>
                    <td>Khulna</td>
                  </tr>
                  <tr>
                    <td>Upazila</td>
                    <td>:</td>
                    <td>Khulna</td>
                  </tr>
                  <tr>
                    <td>ZIP Code</td>
                    <td>:</td>
                    <td>2012 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-5 p-5 bg-white rounded-xl">
          <h1 className="text-xl font-bold">Lorem, ipsum dolor.</h1>
          <p>
          A user profile is a collection of settings and information associated with a user. It contains critical information that is used to identify an individual, such as their name, age, portrait photograph and individual characteristics such as knowledge or expertise. A user profile is a collection of settings and information associated with a user. It contains critical information that is used to identify an individual, such as their name, age, portrait photograph and individual characteristics such as knowledge or expertise.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl mt-5">
          <h1 className="text-xl font-bold">Create Scratch By you</h1>
          <div className="md:grid grid-cols-4 gap-10 mt-5">
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersProfile;
