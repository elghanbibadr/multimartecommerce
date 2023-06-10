import Navbar from "../../componenet/Navbar" ;
import Hero from "../../componenet/Hero"
import TrendingProducts from "../../componenet/TrendingProducts"
import ProductItem from "../../componenet/UI/ProductItem"
import Features from "../../componenet/Features";

const Home = () => {
  return (
    <>
    <Hero/>
    <Features />
    <TrendingProducts />
    <ProductItem />
    </>
  )
}

export default Home