import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="container pt-28 mx-auto p-3">
      <h1 className="md:text-5xl text-3xl font-bold pb-7 text-center">{t("Blog")}</h1>

      <div className=" md:grid grid-cols-3 my-5 gap-5 ">
        <div className="bg-[#ededed] p-5 rounded-md shadow-lg">
          <div className="avatar">
            <div className="w-fit rounded">
              <img src="https://images.prothomalo.com/prothomalo-bangla%2F2021-09%2Fe8174444-5bf1-4f91-8416-f9ea279cb21a%2Fscratchpng.png?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=2.0" />
            </div>
          </div>
            <p className="text-xl font-semibold my-3">1. স্ক্র্যাচে এখন থেকে বাংলাতেই প্রোগ্রামিং শেখা যাবে</p>
          <p>জনপ্রিয় স্ক্র্যাচ প্ল্যাটফর্মে এখন থেকে বাংলা ভাষাতেই প্রোগ্রামিং ও প্রজেক্ট করা যাবে। বিশ্বের ১৯০টি দেশের শিশু-কিশোরদের প্রোগ্রামিং শেখার...... <Link to="/details" className="link link-hover text-violet-600">{t("Read more")}</Link></p>
        </div>
        <div className="bg-[#ededed] p-5 rounded-md shadow-lg">
          <div className="avatar">
            <div className="w-fit rounded">
              <img src="https://images.prothomalo.com/prothomalo-bangla%2F2021-09%2Fe8174444-5bf1-4f91-8416-f9ea279cb21a%2Fscratchpng.png?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=2.0" />
            </div>
          </div>
            <p className="text-xl font-semibold my-3">1. স্ক্র্যাচে এখন থেকে বাংলাতেই প্রোগ্রামিং শেখা যাবে</p>
          <p>জনপ্রিয় স্ক্র্যাচ প্ল্যাটফর্মে এখন থেকে বাংলা ভাষাতেই প্রোগ্রামিং ও প্রজেক্ট করা যাবে। বিশ্বের ১৯০টি দেশের শিশু-কিশোরদের প্রোগ্রামিং শেখার...... <Link to="/details" className="link link-hover text-violet-600">{t("Read more")}</Link></p>
        </div>
        <div className="bg-[#ededed] p-5 rounded-md shadow-lg">
          <div className="avatar">
            <div className="w-fit rounded">
              <img src="https://images.prothomalo.com/prothomalo-bangla%2F2021-09%2Fe8174444-5bf1-4f91-8416-f9ea279cb21a%2Fscratchpng.png?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=2.0" />
            </div>
          </div>
            <p className="text-xl font-semibold my-3">1. স্ক্র্যাচে এখন থেকে বাংলাতেই প্রোগ্রামিং শেখা যাবে</p>
          <p>জনপ্রিয় স্ক্র্যাচ প্ল্যাটফর্মে এখন থেকে বাংলা ভাষাতেই প্রোগ্রামিং ও প্রজেক্ট করা যাবে। বিশ্বের ১৯০টি দেশের শিশু-কিশোরদের প্রোগ্রামিং শেখার...... <Link to="/details" className="link link-hover text-violet-600">{t("Read more")}</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
