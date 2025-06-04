import { basic_url } from "@/stack/stack";
import { message, Pagination, PaginationProps, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import RelatedPersonSay from "./RelatedPersonSay";
import moment from "moment";
import "@/styles/custom-antd-pagination.css";

interface DataItem {
  category_id: number;
  created_at: Date;
  img_url: string;
  id: number;
  modified_at: Date;
  owner_id: number;
  rating: number;
  summary: string;
  title: string;
}

const Posts = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [allData, setAllData] = useState<DataItem[]>([]);
  const [pgNumber, setPgNumber] = useState(1);
  const [pgSize, setPgSize] = useState(10);
  const [category, setCategory] = useState<string>("latest");
  const [totalCount, setTotalCount] = useState<number>(0);

  const onChange: PaginationProps["onChange"] = (pageNumber, pageSize) => {
    setPgNumber(pageNumber);
    setPgSize(pageSize);
  };

  const handleChange = (value: string) => {
    setSearchVal(value);
  };

  const handleCategory = (value: string) => {
    setCategory(value);
  };

  useEffect(() => {
    axios.get(`${basic_url}blogposts/all_blogposts_count`).then((res) => {
      setTotalCount(res.data.count);
    });
  });

  const searchFunction = () => {
    if (category === "popular") {
      if (searchVal) {
        axios
          .get(
            `${basic_url}blogposts/articles_by_popualr/${pgNumber}/${pgSize}/${searchVal}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Popular All data with Search Value"),
          );
      } else {
        axios
          .get(
            `${basic_url}blogposts/articles_by_popular/${pgNumber}/${pgSize}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Popular All Data No Search Value"),
          );
      }
    } else if (category === "latest") {
      if (searchVal) {
        axios
          .get(
            `${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}/${searchVal}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Latest All Data with Search Value"),
          );
      } else {
        axios
          .get(`${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}`)
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Latest All Data No Search Value"),
          );
      }
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchFunction();
    }
  };

  useEffect(() => {
    searchFunction();
  }, [category, pgNumber, pgSize]);

  return (
    <div className="container mx-auto mb-[60px] mt-[60px] px-4 md:mb-[90px] md:mt-[80px] lg:mb-[135px] lg:mt-[102px]">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
        <div className="w-full lg:w-auto">
          <h1 className="font-blackOpsOne text-4xl leading-none sm:text-5xl md:text-6xl lg:text-[80px]">
            Posts
          </h1>
          <div className="h-[2px] w-[80px] bg-[#0f0f0f] md:h-[3px] md:w-[132px]"></div>
          <div className="flex flex-col items-center gap-4 px-4 py-5 md:gap-6 md:px-5 lg:gap-10">
            <div className="relative w-full md:w-[200px]">
              <input
                id="search-bar"
                type="text"
                placeholder="Search"
                className="h-10 w-full rounded-lg border border-[#ebebeb] bg-[#FFFFFF] pl-4 pr-8 text-sm text-black placeholder:text-[#808080] md:h-12 md:text-base"
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={(e) => handleSearch(e)}
              />
              <img
                src="/icons/search.png"
                className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 md:h-4 md:w-4"
                alt="search icon"
              />
            </div>
            <div className="flex items-center gap-2 md:gap-0">
              <label className="text-nowrap whitespace-nowrap pr-2 text-base text-[#808080] md:text-lg lg:text-xl">
                Order by :{" "}
              </label>
              <Select
                defaultValue={"latest"}
                onChange={handleCategory}
                style={{
                  width: 120,
                  height: 40,
                }}
                className="text-sm md:text-base"
                options={[
                  {
                    value: "latest",
                    label: "Latest",
                  },
                  {
                    value: "popular",
                    label: "Popular",
                  },
                ]}
              ></Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 border-b border-t border-[#000000]/40 p-4 py-5 md:grid-cols-2 md:gap-10 md:p-5 md:py-16">
            {allData.map((item, index) => {
              return (
                <RelatedPersonSay
                  key={index}
                  id={item.id}
                  author="TRDARTS.com"
                  time={moment(item.created_at).format(
                    "kk:mm:ss MM / DD / YYYY",
                  )}
                  articleTitle={item.title}
                  articleSubtitle={item.summary}
                  img_url={item.img_url}
                />
              );
            })}
          </div>
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            total={totalCount}
            onChange={onChange}
            className="mt-6 select-none px-4 text-sm md:mt-8 md:px-5 md:text-base"
            itemRender={(_, type, originalElement) => {
              if (type === "prev") {
                return <span>{"<"}</span>;
              }
              if (type === "next") {
                return <span>{">"}</span>;
              }
              return originalElement;
            }}
            pageSizeOptions={["12", "24", "48", "96"]}
            defaultPageSize={12}
          />
        </div>
        <div className="w-[320px] shrink-0">
          <iframe
            className="widget_preview_iframe"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            scrolling="no"
            style={{visibility: "visible", width: '100%', height: '723px',}}
            src="https://www.feedspot.com/widgets/lookup/9967KwDLf9b5"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Posts;
