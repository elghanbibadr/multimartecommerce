import Hero from "../../componenet/Hero"
import Features from "../../componenet/Features";
import CountDown from "../../componenet/CountDown";
import ProductsShowsUp from "../../componenet/UI/ProductsShowsUp"


const Home = () => {
  return (
    <>
    <Hero/>
    <Features />
    <ProductsShowsUp category="chair" sectionTitle="Trending Products" />
    <ProductsShowsUp category="sofa" sectionTitle="Best Sales" />
    <CountDown />
    <ProductsShowsUp category="mobile" category2='wireless' sectionTitle="New Arrivals" />
    <ProductsShowsUp category="watch"  sectionTitle="Popular in Category" />
    </>
  )
}

export default Home