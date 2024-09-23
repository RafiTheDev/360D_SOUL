import Bann from "../../Components/Bann/Bann"
import Banner from "../../Components/Banner/Banner"
import Cloud from "../../Components/Cloud/Cloud"
import Content from "../../Components/Content/Content"
import FeaturedCards from "../../Components/FeaturedCards/FeaturedCards"
import Footer from "../../Components/Footer/Footer"
import Partner from "../../Components/Partners/Partner"
import Navbar from "../../Shared/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Bann></Bann>
        <Banner></Banner>
        <FeaturedCards></FeaturedCards>
        <Cloud></Cloud>
        <Partner></Partner>
        <Content></Content>
        <Footer></Footer>
        
    </div>
  )
}

export default Home