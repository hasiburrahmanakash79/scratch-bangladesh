const BlogDetails = () => {
  return (
    <div className="container mx-auto pt-28">
      <div className="grid grid-cols-3 gap-5">
        <div className="avatar col-span-1">
          <div className="w-fit rounded">
            <img src="https://www.codingal.com/resources/wp-content/uploads/2022/11/Introduction-to-Scratch-coding-740x500-1.png" />
          </div>
        </div>
        <div className="col-span-2">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">1. Lorem ipsum dolor sit amet.</h1>
            <p>Publish Date: 29-12-2022</p>
            </div>
            <p className="border-b-2 py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis repellendus molestias ipsum laboriosam aliquam minus facere nemo, nisi sint quam id. Delectus adipisci mollitia sit non esse deserunt. Aperiam, deleniti molestias! Quam labore id voluptatum quidem iure, veritatis exercitationem hic excepturi tempore voluptates, inventore at odio ea ratione fuga quod aut! Possimus, vel perspiciatis quidem accusamus illum in ipsum odio magnam, quia maxime quos! Recusandae nam harum fugit magnam, unde consequatur, officiis, eaque reprehenderit labore repudiandae quo delectus at minus! Debitis veniam odio repellat dolorum illum. Eos quis quasi consectetur repudiandae veritatis? Libero doloribus optio nisi rem reiciendis veniam modi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui, neque corporis, temporibus ab dolorem voluptatem mollitia libero blanditiis ratione necessitatibus, voluptates assumenda dicta. Delectus totam provident labore ipsam a distinctio quia doloremque dolor odio fuga amet quaerat cumque cupiditate accusantium, ab quasi culpa vero nisi dolorum animi. Consequatur, veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptate placeat natus ex consectetur, vel explicabo velit ducimus, officia corporis alias! Repudiandae molestiae autem maxime corrupti praesentium sunt et? Excepturi velit cumque architecto temporibus fuga eveniet, aspernatur rem illum nihil sit, delectus, atque praesentium quam! Sequi doloremque numquam quibusdam soluta.</p>

            <div className="flex justify-around">
                <p className="link no-underline">Like</p>
                <p className="link no-underline">Comment</p>
                <p className="link no-underline">Share</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
