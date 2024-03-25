const Footer = () => {
  return (
    <footer className="  bg-[#D9D9D9] text-black mt-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5 container mx-auto">
        <div>
          <span className="footer-title">Scratch Bangladesh</span>
          <p>
            আমরা দেশব্যাপী বাংলা ভাষায় প্রোগ্রামিংকে জনপ্রিয় করতে কাজ করে
            যাচ্ছি। বাংলা ভাষায় স্ক্র্যাচ এর উপর টিউটোরিয়াল, প্রজেক্ট আইডিয়া,
            কোর্স সহ বছরব্যাপী নানা আয়োজনের খবর স্ক্র্যাচ বাংলাদেশ ওয়েবসাইটে
            পাওয়া যাবে।
          </p>
          <div className="flex gap-3 mt-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="w-7"
            >
              <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="w-7"
            >
              <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"
              className="w-7">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"
              className="w-7">
              <img src="https://cdn-icons-png.freepik.com/256/1384/1384060.png" alt="" />
            </a>
          </div>
        </div>
        <div>
          <p className="footer-title">Contact Us</p>
          <p className="link link-hover">Call: +880 1998138861</p>
          <p className="link link-hover">scratchbangladesh@gmail.com</p>
          <div className="flex items-center gap-1 mt-3"> 
          <label className="input input-bordered flex items-center gap-2 w-2/3">
            
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-warning">Send</button>
          </div>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <p className="link link-hover">Home</p>
          <p className="link link-hover">Learn</p>
          <p className="link link-hover">About</p>
          <p className="link link-hover">Olympiad</p>
          <p className="link link-hover">Blog</p>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p className="link link-hover">Level 12/758</p>
          <p className="link link-hover">Satmasjid Road</p>
          <p className="link link-hover">Dhaka 1209</p>
        </div>
      </div>
      <div className="bg-[#908E8E] text-center p-5">
        <p>Copyright © 2024 Scratch Bangladesh</p>
      </div>
    </footer>
  );
};

export default Footer;
