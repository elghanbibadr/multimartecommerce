import Hero from "../../componenet/Hero"
import TrendingProducts from "../../componenet/TrendingProducts"
import Features from "../../componenet/Features";
import NewArrivals from "../../componenet/NewArrivals";
import CountDown from "../../componenet/CountDown";
import BestSales from "../../componenet/BestSales";
import PopularInCategory from "../../componenet/PopularInCategory";

const Home = () => {
  return (
    <>
    <Hero/>
    <Features />
    <TrendingProducts />
    <BestSales />
    <CountDown />
    <NewArrivals />
    <PopularInCategory/>
    </>
  )
}

export default Home