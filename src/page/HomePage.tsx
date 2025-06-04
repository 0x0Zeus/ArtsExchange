import Hero from "@/components/Home/Hero"
import LatestNews from "@/components/Home/LatestNews"
import Posts from "@/components/Home/Posts"

const HomePage = () => {
  return (
    <div className="font-inter">
      <Hero />
      <LatestNews />
      <Posts />
    </div>
  )
}

export default HomePage