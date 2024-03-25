import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container pt-28 mx-auto mb-20 p-3">
      <h1 className="md:text-5xl text-3xl font-bold pb-7 text-center">Blog</h1>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus
        commodi aperiam animi ratione. Esse ducimus neque sequi necessitatibus
        est, rerum provident beatae sapiente nam consequuntur praesentium ipsa
        ea voluptas corporis quae autem eligendi saepe eos tempora asperiores?
        Corrupti hic harum repudiandae aliquid eveniet voluptas saepe recusandae
        quo cumque! Veritatis asperiores soluta debitis tempore, pariatur natus
        nemo eius in vero numquam corporis sed. Nesciunt quidem temporibus
        tenetur sit pariatur cum nisi quasi provident qui nobis exercitationem,
        officiis nulla vitae magnam minus perspiciatis incidunt sint ut
        inventore quo animi deleniti nemo. Molestias, iusto! Quia possimus
        excepturi perspiciatis amet doloremque reiciendis molestiae.
      </p>

      <div className=" md:grid grid-cols-3 my-5 gap-5">
        <div className="bg-[#D9D9D9] p-5 rounded-md shadow-lg">
            <p className="text-xl font-semibold my-3">1. Lorem ipsum dolor sit.</p>
          <div className="avatar">
            <div className="w-fit rounded">
              <img src="https://www.codingal.com/resources/wp-content/uploads/2022/11/Introduction-to-Scratch-coding-740x500-1.png" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odio sed? Quos exercitationem debitis, repellat perferendis...... <Link to="/details" className="link link-hover text-violet-600">Read more</Link></p>
        </div>
        <div className="bg-[#D9D9D9] p-5 rounded-md shadow-lg">
            <p className="text-xl font-semibold my-3">1. Lorem ipsum dolor sit.</p>
          <div className="avatar">
            <div className="w-fit rounded">
              <img src="https://brightchamps.com/blog/wp-content/uploads/2022/05/Category-Scratch.webp" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odio sed? Quos exercitationem debitis, repellat perferendis...... <Link to="/details" className="link link-hover text-violet-600">Read more</Link></p>
        </div>
        <div className="bg-[#D9D9D9] p-5 rounded-md shadow-lg">
            <p className="text-xl font-semibold my-3">1. Lorem ipsum dolor sit.</p>
          <div className="avatar">
            <div className="w-fit rounded">
              <img src="https://www.codingal.com/resources/wp-content/uploads/2024/01/Scratch-Coding-blog.png" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odio sed? Quos exercitationem debitis, repellat perferendis...... <Link to="/details" className="link link-hover text-violet-600">Read more</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
