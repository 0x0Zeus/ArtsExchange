import { basic_url } from "@/stack/stack";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { message } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";

const LatestNews = () => {
  const [mostPopularArticle, setMostPopularArticle] = useState({
    id: 0,
    title: "",
    summary: "",
    mdate: "",
    img_url: "",
  });

  useEffect(() => {
    axios
      .get(`${basic_url}blogposts/popular_article_related_articles`)
      .then((res) => {
        setMostPopularArticle({
          id: res.data[0].id,
          title: res.data[0].title,
          summary: res.data[0].summary,
          mdate: moment(res.data[0].created_at).format(
            "kk:mm:ss MM / DD / YYYY",
          ),
          img_url: res.data[0].img_url,
        });
        console.log("======>", res);
      })
      .catch(() => message.error("Error network Popular And Related Article"));

  }, []);

  const handleViewDetails = () => {
    window.location.href = `/articles/:${mostPopularArticle.id}`;
  };

  return (
    <div className="container mx-auto px-4 mb-[60px] md:mb-[90px] lg:mb-[135px] mt-[60px] md:mt-[80px] lg:mt-[102px]">
      <h1 className="font-blackOpsOne text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-none">Latest</h1>
      <div className="h-[2px] md:h-[3px] w-[80px] md:w-[132px] bg-[#0f0f0f]"></div>
      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col items-start justify-between md:pr-10 space-y-4 md:space-y-0">
          <p className="text-base md:text-xl leading-[32px] md:leading-[40px] text-black">
            {mostPopularArticle.mdate}
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            {mostPopularArticle.title}
          </h3>
          <p className="line-clamp-3 text-base md:text-xl text-black">
            {mostPopularArticle.summary}
          </p>
          <div className="w-[60px] md:w-[84px] border-t border-[#0f0f0f]/60 py-4 md:py-5 text-center">
            <button className="rounded-lg hover:scale-105" onClick={handleViewDetails}>
              <FaArrowRightLong size={30} className="md:w-[40px] md:h-[40px]" />
            </button>
          </div>
        </div>
        <img
          // src="/images/sample.png"
          src={mostPopularArticle.img_url}
          className="w-full rounded-xl md:rounded-3xl"
          alt="Latest news article"
        />
      </div>
    </div>
  );
};

export default LatestNews;
