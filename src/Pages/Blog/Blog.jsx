import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Card, CardHeader } from "@material-tailwind/react";

const Blog = () => {
  const { t } = useTranslation();
  

  const cardDetails = [
    
    {
      id: 1,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Sabbir Hossain",
      image:
        "https://media.istockphoto.com/id/1418012316/photo/tea-garden.jpg?s=612x612&w=0&k=20&c=yk7d_zIIoDISNQAO_yFHtj_QQY7xCpVY8Bg33CD28hY=",
      title: "স্ক্র্যাচে এখন থেকে বাংলাতেই প্রোগ্রামিং শেখা যাবে",
      details:
        "প্রথমবারের মতো দেশে আয়োজিত হলো বাংলাদেশ স্ক্র্যাচ অলিম্পিয়াড ২০২৩। ২২ অক্টোবর, রোববার ঢাকা বিশ্ববিদ্যালয়ের তথ্য প্রযুক্তি ইনস্টিটিউটে আয়োজিত হয় অলিম্পিয়াডটি। দুপুর ২.৩০টা থেকে বিকেল ৫.৩০টা পর্যন্ত চলে এ আয়োজন। এতে প্রথম থেকে অষ্টম শ্রেণি পর্যন্ত ৯৬ শিক্ষার্থী ৩টি ক্যাটাগরিতে অংশ নেয়। শুধু রাজধানীই নয়, চট্টগ্রাম ও কুমিল্লা থেকেও অলিম্পিয়াডে অংশ নেয় খুদে স্ক্র্যাচ প্রোগ্রামরা। অলিম্পিয়াডে অতিথি হিসেবে ছিলেন বাংলাদেশ ওপেন সোর্স নেটওয়ার্কের সাধারণ সম্পাদক মুনির হাসান, ঢাকা বিশ্ববিদ্যালয়ের তথ্য প্রযুক্তি ইনস্টিটিউটের পরিচালক অধ্যাপক বি এম মইনুল হোসেন, কমিউনিকেশন ডিজঅর্ডার বিভাগের সহকারী অধ্যাপক তাউহিদা জাহান, কম্পিউটার সার্ভিসেস লিমিটেডের ব্যবস্থাপনা পরিচালক মমলুক ছাবির আহমেদসহ আরও অনেকে। তাঁরা শিক্ষার্থীদের অনুপ্রেরণা দেওয়ার পাশাপাশি বিজয়ীদের হাতে পুরস্কার তুলে দেন। প্রথম থেকে চতুর্থ শ্রেণির ক্যাটাগরিতে চ্যাম্পিয়ন হয়েছে উদয়ন উচ্চ বিদ্যালয়ের সাম্য রোদোলীন। প্রথম রানার আপ হয়েছে আইডিয়াল স্কুল অ্যান্ড কলেজ, মতিঝিলের রিদওয়ান রাব্বানী এবং দ্বিতীয় রানার আপ হয়েছে সিডিএ পাবলিক স্কুল অ্যান্ড কলেজের নুসাইব হাসান লাবিব। পঞ্চম থেকে ষষ্ঠ শ্রেণির ক্যাটাগরিতে চ্যাম্পিয়ন হয়েছে মতিঝিল মডেল স্কুলের আরশান আরস, প্রথম রানার আপ হয়েছে খুলনা জিলা স্কুলের অরিত্র সরকার এবং দ্বিতীয় রানার আপ হয়েছে সেন্ট জোসেফ স্কুলের অরিখ আজলান আল রহমান। আর সপ্তম থেকে অষ্টম শ্রেণির ক্যাটাগরিতে চ্যাম্পিয়ন হয়েছে গভর্নমেন্ট ল্যাবরেটরি হাই স্কুলের মো. আদিল আল আলিম চিশতী, প্রথম রানার আপ হয়েছে সানিডেইলের আবরার জাহিন এবং দ্বিতীয় রানার আপ হয়েছে সরকারি ইকবালনগর সেকেন্ডারি গার্লস স্কুল, খুলনার স্মিতা সরকার। বিজয়ীদের সার্টিফিকেট, বই, মেডেল ও ক্রেস্ট উপহার দেওয়া হয়। পাশাপাশি ইলেকট্রনিকস কোম্পানি নিউটনের সৌজন্যে প্রত্যেক ক্যাটাগরির চ্যাম্পিয়নকে দেওয়া হয়েছে ট্যাব। দেশে প্রথমবারের মতো স্ক্র্যাচ অলিম্পিয়াড আয়োজনের প্রশংসা করেন অধ্যাপক বি এম মইনুল হোসেন। তিনি বলেন, ‘শিশুদেরকে যদি যৌক্তিক চিন্তার সৌন্দর্য ও উপকারিতাটুকু আনন্দমুখর প্রক্রিয়া বোঝানো যায়, তাহলে ভবিষ্যতে যৌক্তিক ও স্মার্ট প্রজন্ম গড়ে উঠবে। প্রোগ্রামিং হোক সেরকম এক আনন্দদায়ক প্রক্রিয়া। অভিভাবকদের এক প্রশ্নের উত্তরে মুনির হাসান বলেন, ‘এখন অনলাইনে প্রচুর রিসোর্স পাওয়া যায়। স্ক্র্যাচ দিয়ে সহজেই প্রোগ্রামিং শেখা শুরু করতে পারে ওরা। এতে ছোট থেকেই সমস্যা সমাধানে অভ্যাস্ত হয়ে উঠবে শিশুরা। পরে সময় হলে নিজেরাই নিজের পথ বেছে নিতে পারবে।",
        publishDate: "20-11-2023"
    },
    {
      id: 2,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Sabbir Hossain",
      image:
        "https://www.bhmpics.com/downloads/bangladesh-nature/1.feat_30d48d6e-7b84-4dfe-bf22-6306f8a2d403.jpg",
      title: "স্ক্র্যাচে এখন থেকে বাংলাতেই প্রোগ্রামিং শেখা যাবে",
      details:
        "প্রথমবারের মতো দেশে আয়োজিত হলো বাংলাদেশ স্ক্র্যাচ অলিম্পিয়াড ২০২৩। ২২ অক্টোবর, রোববার ঢাকা বিশ্ববিদ্যালয়ের তথ্য প্রযুক্তি ইনস্টিটিউটে আয়োজিত হয় অলিম্পিয়াডটি। দুপুর ২.৩০টা থেকে বিকেল ৫.৩০টা পর্যন্ত চলে এ আয়োজন। এতে প্রথম থেকে অষ্টম শ্রেণি পর্যন্ত ৯৬ শিক্ষার্থী ৩টি ক্যাটাগরিতে অংশ নেয়। শুধু রাজধানীই নয়, চট্টগ্রাম ও কুমিল্লা থেকেও অলিম্পিয়াডে অংশ নেয় খুদে স্ক্র্যাচ প্রোগ্রামরা। অলিম্পিয়াডে অতিথি হিসেবে ছিলেন বাংলাদেশ ওপেন সোর্স নেটওয়ার্কের সাধারণ সম্পাদক মুনির হাসান, ঢাকা বিশ্ববিদ্যালয়ের তথ্য প্রযুক্তি ইনস্টিটিউটের পরিচালক অধ্যাপক বি এম মইনুল হোসেন, কমিউনিকেশন ডিজঅর্ডার বিভাগের সহকারী অধ্যাপক তাউহিদা জাহান, কম্পিউটার সার্ভিসেস লিমিটেডের ব্যবস্থাপনা পরিচালক মমলুক ছাবির আহমেদসহ আরও অনেকে। তাঁরা শিক্ষার্থীদের অনুপ্রেরণা দেওয়ার পাশাপাশি বিজয়ীদের হাতে পুরস্কার তুলে দেন। প্রথম থেকে চতুর্থ শ্রেণির ক্যাটাগরিতে চ্যাম্পিয়ন হয়েছে উদয়ন উচ্চ বিদ্যালয়ের সাম্য রোদোলীন। প্রথম রানার আপ হয়েছে আইডিয়াল স্কুল অ্যান্ড কলেজ, মতিঝিলের রিদওয়ান রাব্বানী এবং দ্বিতীয় রানার আপ হয়েছে সিডিএ পাবলিক স্কুল অ্যান্ড কলেজের নুসাইব হাসান লাবিব। পঞ্চম থেকে ষষ্ঠ শ্রেণির ক্যাটাগরিতে চ্যাম্পিয়ন হয়েছে মতিঝিল মডেল স্কুলের আরশান আরস, প্রথম রানার আপ হয়েছে খুলনা জিলা স্কুলের অরিত্র সরকার এবং দ্বিতীয় রানার আপ হয়েছে সেন্ট জোসেফ স্কুলের অরিখ আজলান আল রহমান। আর সপ্তম থেকে অষ্টম শ্রেণির ক্যাটাগরিতে চ্যাম্পিয়ন হয়েছে গভর্নমেন্ট ল্যাবরেটরি হাই স্কুলের মো. আদিল আল আলিম চিশতী, প্রথম রানার আপ হয়েছে সানিডেইলের আবরার জাহিন এবং দ্বিতীয় রানার আপ হয়েছে সরকারি ইকবালনগর সেকেন্ডারি গার্লস স্কুল, খুলনার স্মিতা সরকার। বিজয়ীদের সার্টিফিকেট, বই, মেডেল ও ক্রেস্ট উপহার দেওয়া হয়। পাশাপাশি ইলেকট্রনিকস কোম্পানি নিউটনের সৌজন্যে প্রত্যেক ক্যাটাগরির চ্যাম্পিয়নকে দেওয়া হয়েছে ট্যাব। দেশে প্রথমবারের মতো স্ক্র্যাচ অলিম্পিয়াড আয়োজনের প্রশংসা করেন অধ্যাপক বি এম মইনুল হোসেন। তিনি বলেন, ‘শিশুদেরকে যদি যৌক্তিক চিন্তার সৌন্দর্য ও উপকারিতাটুকু আনন্দমুখর প্রক্রিয়া বোঝানো যায়, তাহলে ভবিষ্যতে যৌক্তিক ও স্মার্ট প্রজন্ম গড়ে উঠবে। প্রোগ্রামিং হোক সেরকম এক আনন্দদায়ক প্রক্রিয়া। অভিভাবকদের এক প্রশ্নের উত্তরে মুনির হাসান বলেন, ‘এখন অনলাইনে প্রচুর রিসোর্স পাওয়া যায়। স্ক্র্যাচ দিয়ে সহজেই প্রোগ্রামিং শেখা শুরু করতে পারে ওরা। এতে ছোট থেকেই সমস্যা সমাধানে অভ্যাস্ত হয়ে উঠবে শিশুরা। পরে সময় হলে নিজেরাই নিজের পথ বেছে নিতে পারবে।",
        publishDate: "20-11-2023"
    },
    {
      id: 3,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Sabbir Hossain",
      image:
        "https://images.prothomalo.com/prothomalo-english%2F2023-04%2Fc9065616-4564-443f-b409-066dce650145%2FJatiya_Sangsad.webp?rect=0%2C111%2C800%2C420&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1",
      title: "স্ক্র্যাচে এখন থেকে বাংলাতেই প্রোগ্রামিং শেখা যাবে",
      details:
        "প্রথমবারের মতো দেশে আয়োজিত হলো বাংলাদেশ স্ক্র্যাচ অলিম্পিয়াড ২০২৩। ২২ অক্টোবর, রোববার ঢাকা বিশ্ববিদ্যালয়ের তথ্য প্রযুক্তি ইনস্টিটিউটে আয়োজিত হয় অলিম্পিয়াডটি। দুপুর ২.৩০টা থেকে বিকেল ৫.৩০টা পর্যন্ত চলে এ আয়োজন। এতে প্রথম থেকে অষ্টম শ্রেণি পর্যন্ত ৯৬ শিক্ষার্থী ৩টি ক্যাটাগরিতে অংশ নেয়। শুধু রাজধানীই নয়, চট্টগ্রাম ও কুমিল্লা থেকেও অলিম্পিয়াডে অংশ নেয় খুদে স্ক্র্যাচ প্রোগ্রামরা। অলিম্পিয়াডে অতিথি হিসেবে ছিলেন বাংলাদেশ ওপেন সোর্স নেটওয়ার্কের সাধারণ সম্পাদক মুনির হাসান, ঢাকা বিশ্ববিদ্যালয়ের তথ্য প্রযুক্তি ইনস্টিটিউটের পরিচালক অধ্যাপক বি এম মইনুল হোসেন, কমিউনিকেশন ডিজঅর্ডার বিভাগের সহকারী অধ্যাপক তাউহিদা জাহান, কম্পিউটার সার্ভিসেস লিমিটেডের ব্যবস্থাপনা পরিচালক মমলুক ছাবির আহমেদসহ আরও অনেকে। তাঁরা শিক্ষার্থীদের অনুপ্রেরণা দেওয়ার পাশাপাশি বিজয়ীদের হাতে পুরস্কার তুলে দেন। প্রথম থেকে চতুর্থ শ্রেণির ক্যাটাগরিতে চ্যাম্পিয়ন হয়েছে উদয়ন উচ্চ বিদ্যালয়ের সাম্য রোদোলীন। প্রথম রানার আপ হয়েছে আইডিয়াল স্কুল অ্যান্ড কলেজ, মতিঝিলের রিদওয়ান রাব্বানী এবং দ্বিতীয় রানার আপ হয়েছে সিডিএ পাবলিক স্কুল অ্যান্ড কলেজের নুসাইব হাসান লাবিব। পঞ্চম থেকে ষষ্ঠ শ্রেণির ক্যাটাগরিতে চ্যাম্পিয়ন হয়েছে মতিঝিল মডেল স্কুলের আরশান আরস, প্রথম রানার আপ হয়েছে খুলনা জিলা স্কুলের অরিত্র সরকার এবং দ্বিতীয় রানার আপ হয়েছে সেন্ট জোসেফ স্কুলের অরিখ আজলান আল রহমান। আর সপ্তম থেকে অষ্টম শ্রেণির ক্যাটাগরিতে চ্যাম্পিয়ন হয়েছে গভর্নমেন্ট ল্যাবরেটরি হাই স্কুলের মো. আদিল আল আলিম চিশতী, প্রথম রানার আপ হয়েছে সানিডেইলের আবরার জাহিন এবং দ্বিতীয় রানার আপ হয়েছে সরকারি ইকবালনগর সেকেন্ডারি গার্লস স্কুল, খুলনার স্মিতা সরকার। বিজয়ীদের সার্টিফিকেট, বই, মেডেল ও ক্রেস্ট উপহার দেওয়া হয়। পাশাপাশি ইলেকট্রনিকস কোম্পানি নিউটনের সৌজন্যে প্রত্যেক ক্যাটাগরির চ্যাম্পিয়নকে দেওয়া হয়েছে ট্যাব। দেশে প্রথমবারের মতো স্ক্র্যাচ অলিম্পিয়াড আয়োজনের প্রশংসা করেন অধ্যাপক বি এম মইনুল হোসেন। তিনি বলেন, ‘শিশুদেরকে যদি যৌক্তিক চিন্তার সৌন্দর্য ও উপকারিতাটুকু আনন্দমুখর প্রক্রিয়া বোঝানো যায়, তাহলে ভবিষ্যতে যৌক্তিক ও স্মার্ট প্রজন্ম গড়ে উঠবে। প্রোগ্রামিং হোক সেরকম এক আনন্দদায়ক প্রক্রিয়া। অভিভাবকদের এক প্রশ্নের উত্তরে মুনির হাসান বলেন, ‘এখন অনলাইনে প্রচুর রিসোর্স পাওয়া যায়। স্ক্র্যাচ দিয়ে সহজেই প্রোগ্রামিং শেখা শুরু করতে পারে ওরা। এতে ছোট থেকেই সমস্যা সমাধানে অভ্যাস্ত হয়ে উঠবে শিশুরা। পরে সময় হলে নিজেরাই নিজের পথ বেছে নিতে পারবে।",
        publishDate: "20-11-2023"
    },
  ];

  return (
    <div className="container md:pt-28 pt-24 mx-auto p-3">
      <h1 className="md:text-5xl text-3xl font-bold text-center">{t("Blog")}</h1>
      <div className="md:grid grid-cols-3 p-3 space-y-5 md:space-y-0 justify-center my-5 items-center container mx-auto gap-10">
        {cardDetails.map((card, index) => (
          <Card key={card.id} className="overflow-hidden bg-slate-50 border p-4 hover:shadow-xl">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <div className="relative h-44 rounded overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </CardHeader>
            <div className="py-3">
              <Link
                to="/"
                className="md:text-xl text-black font-semibold text-sm"
              >
                {index+1}. {card.title}
              </Link>
            </div>
            <div>
              <span>
                {card.details.slice(0, 100)}.....{" "}
                <Link to="/details" className="link link-hover text-violet-600">{t("Read more")}</Link>
              </span>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <div>
                <h1>Published: {card.publishDate} </h1>
              </div>
              <div className="flex items-center gap-2">
                <p>102 view</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
