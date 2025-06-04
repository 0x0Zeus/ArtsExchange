import { NavLink } from "react-router-dom";

const BlogsPage1 = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[80%] max-w-[800px] flex-col gap-5">
        <NavLink to="/blogs/1">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/1/1.jpg"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
                The Digital Transformation of Art Auctions
              </h1>
              <p className="text-justify line-clamp-3">
                Discover how art auctions have evolved from traditional bidding to dynamic online platforms in the digital age. Learn about the challenges and opportunities this transition presents, and how it is reshaping the art market landscape
              </p>
            </div>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/blogs/2">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/2/1.jpg"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
                The Evolution of Van Gogh's Painting Style
              </h1>
              <p className="text-justify line-clamp-3">
                Discover how Vincent van Gogh transformed his painting style over his lifetime, transitioning from dark, somber tones to the vibrant colors that define his most famous works. This journey not only marks a significant development in the artist's career but also offers inspiration and insight for artists and art lovers today.
              </p>
            </div>
          </div>
        </NavLink>
        {/* <hr />
        <NavLink to="/blogs/gold-investment-physical-vs-etfs">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/3/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
                Is Your Gold Investment Keeping Up? The Real Winner Between Physical Gold and Gold ETFs
              </h1>
              <p className="text-justify line-clamp-3">
                Ever wondered if your gold investment is pulling its weight? Discover the untold advantages and hidden drawbacks of physical gold and gold ETFs. It’s time to find out if you’re making the smartest choice with your money.
              </p>
            </div>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/blogs/bulletproof-wealth-with-gold-inflation">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/4/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
                How to Bulletproof Your Wealth When Inflation Strikes: Why Gold Is Your Secret Weapon
              </h1>
              <p className="text-justify line-clamp-3">
                Worried about inflation eating away at your savings? Discover how to fortify your wealth with gold, your ultimate shield in times of economic turmoil.
              </p>
            </div>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/blogs/role-of-gold-diversified-portfolio">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/5/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              The Golden Shield: How Gold Enhances Portfolio Balance and Resilience
              </h1>
              <p className="text-justify line-clamp-3">
              Discover how gold plays a vital role in portfolio diversification and risk management. Learn why investors turn to gold as a stabilizing asset in uncertain markets.
              </p>
            </div>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/blogs/gold-coins-vs-gold-bars-investment">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/6/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              Gold Coins vs. Gold Bars: Which is the Better Investment?
              </h1>
              <p className="text-justify line-clamp-3">
              Explore the pros and cons of investing in gold coins vs. gold bars. Discover which form offers the best value, tax implications, and the ideal choice for your investment goals.
              </p>
            </div>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/blogs/top-gold-investment-strategies-2024">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/7/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              Top 5 Gold Investment Strategies for 2024
              </h1>
              <p className="text-justify line-clamp-3">
              Explore the top gold investment strategies for 2024, from physical gold to digital assets. Learn how to make smart choices in a fluctuating market and enhance your portfolio’s stability.
              </p>
            </div>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/blogs/how-central-banks-shape-gold-market">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/8/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              How Central Banks Shape the Gold Market: What Investors Need to Know
              </h1>
              <p className="text-justify line-clamp-3">
              Uncover the powerful influence of central banks on the global gold market. Learn how central bank gold holdings and policies impact prices and investor decisions worldwide.
              </p>
            </div>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/blogs/environmental-impact-gold-mining-responsible-investing">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/9/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              The Environmental Impact of Gold Mining: How to Invest Responsibly and Sustainably
              </h1>
              <p className="text-justify line-clamp-3">
              Explore the environmental impact of gold mining and discover responsible ways to invest. Learn about sustainable options like recycled and ethically sourced gold to align your investments with your values.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/physical-gold-etfs-IRA">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/10/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              Physical Gold vs. Gold ETFs in an IRA: Which is Better?
              </h1>
              <p className="text-justify line-clamp-3">
              Detailed guide on the differences between physical gold and gold ETFs in an IRA. Learn about liquidity, fees, and risks to make the best choice for your retirement.
              </p>
            </div>
          </div>
        </NavLink> */}
      </div>
    </div>
  )
}

export default BlogsPage1;