type props = {
  id: number;
  author: string;
  time: string;
  articleTitle: string;
  articleSubtitle: string;
  img_url: string;
};

const RelatedPersonSay = ({
  id,
  time,
  articleTitle,
  articleSubtitle,
  img_url,
}: props) => {
  const handleViewDetails = () => {
    window.location.href = `/articles/:${id}`;
  };

  return (
    <div
      className="flex w-full cursor-pointer flex-col justify-between gap-4 md:gap-6 font-inter text-black"
      onClick={handleViewDetails}
    >
      <span className="border-b border-[#000000] text-base w-fit">{time}</span>
      <img 
        src={img_url}
        // src="/images/sample.png"
        className="w-full h-auto" 
      />
      <h1 className="font-bold text-2xl">{articleTitle}</h1>
      <p className="line-clamp-2 text-base">{articleSubtitle}</p>
    </div>
  );
};

export default RelatedPersonSay;
