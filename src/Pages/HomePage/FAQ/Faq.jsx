const Faq = () => {
  return (
    <div className="container mx-auto my-14 p-3">
        <h1 className="md:text-5xl text-2xl font-bold mb-5">FAQ</h1>
      <div className="md:grid grid-cols-3 items-center justify-center gap-5">
        <div className="space-y-3 col-span-2">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-medium">
            What is Scratch, and what can I do with it?

            </div>
            <div className="collapse-content">
              <p>With the Scratch programming language and online community, you can create your own interactive stories, games, and animations -- and share your creations with others around the world. As young people create and share Scratch projects, they learn to think creatively, reason systematically, and work collaboratively. To learn more about Scratch, see the About Scratch page.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-medium">
            Who uses Scratch?
            </div>
            <div className="collapse-content">
              <p>Scratch is used by people from all backgrounds, in all countries around the world, in all types of settings -- homes, schools, libraries, museums, and more. Scratch is designed especially for young people ages 8 to 16, but people of all ages create and share with Scratch. Younger children may want to try ScratchJr, a simplified version of Scratch designed for ages 5 to 7.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-medium">
            What are the system requirements for Scratch?
            </div>
            <div className="collapse-content">
              <p>Scratch will run in most current web browsers on desktops, laptops and tablets. You can view projects on mobile phones, but currently you are not able to create or edit projects on phones. Below is the list of officially supported browsers.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-medium">
            Can I still upload projects created with older versions of Scratch to the website?
            </div>
            <div className="collapse-content">
              <p>es: You can share or upload projects made with earlier versions of Scratch, and they will be visible and playable. (However, you can’t download projects made with or edited in later versions of Scratch and open them in earlier versions. For example, you can’t open a Scratch 3.0 project in the desktop version of Scratch 2.0, because Scratch 2.0 doesn’t know how to read the .sb3 project file format.)</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-medium">
            Do you have a downloadable version so I can create and view projects offline?
            </div>
            <div className="collapse-content">
              <p>The Scratch app allows you to create Scratch projects without an internet connection. You can download the Scratch app from the Scratch website or the app store for your device. (This was previously called the Scratch Offline Editor.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src="https://bechofy.in/img/hero-img/faq.png"
            alt=""
            className="w-full mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
