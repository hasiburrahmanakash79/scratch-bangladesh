import { useTranslation } from "react-i18next";
const Olympiad = () => {
  const { t } = useTranslation();
  return (
    <div className="container pt-28 mx-auto p-3">
      <div>
        <h1 className="text-center md:text-5xl text-3xl font-bold">
          বাংলাদেশ স্ক্র্যাচ অলিম্পিয়াড
        </h1>
        <p className="my-5">
          {t("By learning Scratch, students can create games, animation videos and cartoons. Scratch programming does not require learning any coding. Scratch programming is available in more than 80 languages ​​in the world. Now Bengali language is also included in that list. As a result, coding can also be done in Bengali language with Scratch. This is a new milestone for Bengali language. Students need to know computer programming to be proficient in future technology fields.To this end the Government of Bangladesh has included programming education in the school curriculum. Scratch Olympiad is being organized in Bangladesh from 2023 to encourage students to learn programming through Scratch.  Students from 1st to 8th class can participate in total 3 categories in the competition.")}
        </p>
        <span className="font-bold">{t("Catagories Are:")}</span>
        <div className="ms-5">
          <li>ক্যাটাগরি ১ : ১ম থেকে ৪র্থ শ্রেণী</li>
          <li>ক্যাটাগরি ২ : ৫ম ও ৬ষ্ঠ শ্রেণী</li>
          <li>ক্যাটাগরি ৩ : ৭ম ও ৮ম শ্রেণী</li>
        </div>
        <p className="mt-5">
          প্রতিটি ক্যাটাগরির শিক্ষার্থীদের একটি নির্দিষ্ট গল্পের উপর নির্দিষ্ট
          কিছু চরিত্র (Sprite) ব্যবহার করে একটি গেইম অথবা এনিমেশন প্রজেক্ট তৈরি
          করতে হয়। সেক্ষেত্রে অলিম্পিয়াডের সময় প্রশ্নের মধ্যে গল্প ও মোট
          চরিত্রের (Spite) সংখ্যা উল্লেখ করা থাকে।
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-5">বিগত বছরের প্রশ্ন:</h1>
        <div className="items-center grid-cols-3 gap-10 md:grid my-7">
          <div className="col-span-2 mb-3 rounded-lg ">
            <img
              className="rounded-lg shadow-lg"
              src="https://i.ibb.co/7x3Hpmm/scratchimage.jpg"
            />
          </div>
          <div className=" col-span-1 bg-blue-400 h-full p-5 rounded-lg space-y-4">
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <a href="" target="_blank">
                Scratch Olympiad 2023
              </a>
            </div>
            <div className="p-2 bg-white rounded-md shadow-lg link link-hover hover:bg-blue-300">
              <h1>Scratch Olympiad 2024 (Upcomming...)</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-10">
        <h1 className="text-3xl font-bold my-5">Olympiad champions:  </h1>
        <div className="items-center grid-cols-3 gap-10 md:grid my-7">
          <div className="col-span-2 bg-blue-400 p-5 rounded-lg ">
            <div className="p-2 bg-white rounded-md shadow-lg">
              <h1>All Year Olympiad winner. <span className="text-blue-600 link link-hover">Download list</span> </h1>
            </div>
          </div>
          <div className=" col-span-1 h-full">
            <h1>Some Ads</h1>
          </div>
        </div>
      </div> */}
      <div>
        <div className="my-10">
          <h1 className="text-3xl font-bold mb-7">Olympiad Photo Gallery: </h1>
          <div className="grid md:grid-cols-5 grid-cols-2 gap-5 ">
            {/* <div className="relative">
              <img
                src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432109110_420580517146429_129450933892479983_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGDRjAvbxUAO-nHcElmkt3GMPhNvCNePBsw-E28I148G36VFV5LWB2QdfS0_tRSDHPM5XAQOXh10W2jZRfoq3C_&_nc_ohc=FjHyO-e7EEAAX9wz4RT&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBVYuJcpktOW08_x_rNwiny4t5juWW2XJEMW1sWtPUp6A&oe=6609DDB7"
                alt="Avatar"
                className={`object-cover w-full h-full cursor-pointer ${
                  isExpanded ? "fixed top-0 left-0 right-0 bottom-0 z-50" : ""
                }`}
                onClick={toggleSize}
              />
            </div> */}
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432214770_420582713812876_8079360216888642657_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG3RjG4Ahr4j7IvXKzZctacVKI8aWjwsOBUojxpaPCw4FfEAQ3PGz9QRg0DGIf6RMjxdu0pHua2fpC0JM8AJkyI&_nc_ohc=nN7wtNrc0wcAX_uj5ok&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCGt1lOYCkVYdM4u1nijlu3bNvZPvr2Jn9HQL6hXHdvdA&oe=660B064E" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432179545_420582633812884_7521137197029333750_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFaM4nXeGgAojaiQ7sOVemmCsxyT35GRjQKzHJPfkZGNHtSdHsmoYRYkJC-eBYyR7P-hvTfj5Wdy7gjg9iTq6_P&_nc_ohc=RIF3yrrIP4gAX-fNhxf&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCHutmTDbFV-H146dU-OXnUzbN-bkbKXLCphBjXV7a7mg&oe=6609819C" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432277550_420582613812886_1729270438758112883_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHC9jeu_zTELVlZa9iRpV3A4ZRuIiKjKUXhlG4iIqMpRRvKCNmqdplwKZp9FBZr9rlke54_hi7pECxwKWbD7ZLJ&_nc_ohc=Z-mL2Uy5rZ8AX_5dxeu&_nc_ht=scontent.fdac14-1.fna&oh=00_AfADqtsVm8ZhYXr1F_H1M4LLxwy0s-rbs3mhEq_ed0i4PA&oe=66096F6B" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432232281_420582570479557_1064694654278645016_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEnTUr6pC8iImMhk8AaeyAZLnWULioHJrQudZQuKgcmtIKuaYDzQavhGDNZkSDXXYXkG1CirtAnrquQifYXWS_I&_nc_ohc=m-zMSXPinO4AX_i3-XL&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBkhWbxnsXklCsnqIEf2SVmFT0TfhqZMdIgS1RJd-YIVw&oe=6609D8B7" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432109110_420580517146429_129450933892479983_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGDRjAvbxUAO-nHcElmkt3GMPhNvCNePBsw-E28I148G36VFV5LWB2QdfS0_tRSDHPM5XAQOXh10W2jZRfoq3C_&_nc_ohc=FjHyO-e7EEAAX9wz4RT&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBVYuJcpktOW08_x_rNwiny4t5juWW2XJEMW1sWtPUp6A&oe=6609DDB7" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432252462_420580487146432_9173063403789917713_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFdxzVm2MIHfRrP9_opRPrLNhCV6rlP9xQ2EJXquU_3FIro-YRAwulLPNOdpUDbY_q7aCfIyMzldxg6kcFHNdtS&_nc_ohc=JK5PDMu66e0AX_UW-Qe&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDzpOVq0wItBzUlfoW-09IZFky0lQEZsu9qMsi0Xc4cyg&oe=6609ADB5" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432218246_420580433813104_3875972741418289702_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFn6NNcsnGZUbfPTPWvtQWlY56u3qtgwP9jnq7eq2DA_3xWLd_USpJxI8hAj091oPocpacx6dPlTAqib7w0xQXT&_nc_ohc=L2ouG40JyUoAX90TBiL&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBAdrRvl2ouGbvSFC3j7FWuoldDXXg1Ykvu0MA1Xv_QLA&oe=660A6DCB" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432318403_420580317146449_7959077694503822965_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE_6TC322HFOJ6mMJb6x1RQwYXlhRn5Ai7BheWFGfkCLmKH7a9QXElxYkM8iAgG06epu8S0KFlQra03U6m_QKpy&_nc_ohc=CAZ5I3rXLmQAX_-OkKh&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBn2qjMBtiS-VFZqjQQBOh3r5rhHASAGoias_aUp8E1qQ&oe=6609AA44" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432166445_420580320479782_7368211862203997210_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPBWq53Ai521-J9-r790WM_tVbPMeMMtL-1Vs8x4wy0s7yM43ZMyDpzeVwDUlkHIrRKJvk7OmR-fixqD1QpmM-&_nc_ohc=QO6vB2TJWDwAX-WY4rq&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDfVdGFCvTNJojhm-qtIZ3dYB_WxMNlyyIdz6JP1HpDwA&oe=6609FF4B" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-fit rounded">
                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/432297186_420580293813118_4018763976024111052_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFZVamTb7DAmSXxcU1IDENwlc9uN4XuJ3CVz243he4ncIrdQjeHDTvbxQ81WupCdynFjLtsuUoG9aRCCnADTL0x&_nc_ohc=9O8SNkn1eTIAX9ZtyT3&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCLBJbmNlOSD3c_TmF22PymQNPGcDvrn0FJ2ZND05ofog&oe=660AAEE8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Olympiad;
